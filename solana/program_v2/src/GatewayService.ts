import { GatewayV2, IDL } from "./gateway_v2";
import {
  AnchorProvider,
  Program,
  Idl,
  parseIdlErrors,
  translateError,
} from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import {
  ConfirmOptions,
  Connection,
  Keypair,
  PublicKey,
  Signer,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

import { Wallet } from "./lib/types";

import { ExtendedCluster } from "./lib/connection";
import { u16, u8 } from "./state";

type FeeStructure = {
  token: PublicKey;
  issue: u16;
  refresh: u16;
  expire: u16;
  verify: u16;
};
type AuthKeyStructure = {
  flags: anchor.BN;
  key: PublicKey;
};

type CreateNetworkData = {
  authThreshold: u8;
  passExpireTime: anchor.BN;
  networkDataLen: u16;
  signerBump?: u8;
  fees?: Array<FeeStructure>;
  authKeys?: Array<AuthKeyStructure>;
};

type UpdateNetworkData = {
  authThreshold: u8;
  passExpireTime: anchor.BN;
  networkDataLen?: u16;
  fees?: Array<FeeStructure>;
  authKeys?: Array<AuthKeyStructure>;
};

export class GatewayService {
  static async build(
    dataAccount: PublicKey,
    cluster: ExtendedCluster = "mainnet-beta",
    wallet: Wallet = new DummyWallet(),
    opts: ConfirmOptions = AnchorProvider.defaultOptions(),
    connection?: Connection
  ): Promise<GatewayService> {
    const _connection = connection;
    // getConnectionByCluster(identifier.clusterType, opts.preflightCommitment);
    // Note, DidSolService never signs, so provider does not need a valid Wallet or confirmOptions.
    const provider = new AnchorProvider(
      _connection as Connection,
      wallet,
      opts
    );

    const program = await GatewayService.fetchProgram(provider);

    return new GatewayService(
      program,
      provider.publicKey,
      cluster,
      wallet,
      provider.opts
    );
  }

  static async buildFromAnchor(
    program: Program<GatewayV2>,
    dataAccount: PublicKey,
    cluster: ExtendedCluster,
    provider: AnchorProvider,
    wallet?: Wallet
  ): Promise<GatewayService> {
    return new GatewayService(
      program,
      dataAccount,
      cluster,
      wallet ? wallet : provider.wallet,
      provider.opts
    );
  }
  static async fetchProgram(
    provider: anchor.Provider
  ): Promise<Program<GatewayV2>> {
    let idl = await Program.fetchIdl<GatewayV2>(
      "FSgDgZoNxiUarRWJYrMDWcsZycNyEXaME5i3ZXPnhrWe",
      provider
    );

    if (!idl) {
      console.warn(
        "Could not fetch IDL from chain. Using build-in IDL as fallback."
      );
      idl = IDL;
    }

    return new Program<GatewayV2>(
      idl,
      "FSgDgZoNxiUarRWJYrMDWcsZycNyEXaME5i3ZXPnhrWe",
      provider
    ) as Program<GatewayV2>;
  }

  private constructor(
    private _program: Program<GatewayV2>,
    private _dataAccount: PublicKey,
    private _cluster: ExtendedCluster = "mainnet-beta",
    private _wallet: Wallet = new DummyWallet(),
    private _opts: ConfirmOptions = AnchorProvider.defaultOptions()
  ) {
    // TODO what do we need to construct?
  }

  getWallet(): Wallet {
    return this._wallet;
  }

  getConnection(): Connection {
    return this._program.provider.connection;
  }

  getConfrirmOptions(): ConfirmOptions {
    return this._opts;
  }

  getIdl(): Idl {
    return this._program.idl;
  }

  closeNetwork(receiver: PublicKey): GatewayServiceBuilder {
    const authority = this._program.provider.publicKey as PublicKey;
    const instructionPromise = this._program.methods
      .closeNetwork()
      .accounts({
        network: Keypair.generate().publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
        //authority,
        receiver,
      })
      .instruction();

    return new GatewayServiceBuilder(this, {
      instructionPromise,
      didAccountSizeDeltaCallback: () => {
        throw new Error("Dynamic Alloc not supported");
      },
      allowsDynamicAlloc: false,
      authority: authority,
    });
  }

  createNetwork(
    payer: PublicKey = this._wallet.publicKey,
    data: CreateNetworkData = {
      authThreshold: new u8(1),
      passExpireTime: new anchor.BN(16),
      networkDataLen: new u8(0),
      signerBump: new u16(0),
      fees: [],
      authKeys: [],
    }
  ): GatewayServiceBuilder {
    const instructionPromise = this._program.methods
      .createNetwork(data)
      .accounts({
        network: this._dataAccount,
        systemProgram: anchor.web3.SystemProgram.programId,
        payer,
      })
      .instruction();

    return new GatewayServiceBuilder(this, {
      instructionPromise,
      didAccountSizeDeltaCallback: () => {
        throw new Error("Dynamic Alloc not supported");
      },
      // TODO: Implement this...
      allowsDynamicAlloc: false,
      authority: payer,
    });
  }

  updateNetwork(
    payer: PublicKey,
    data: UpdateNetworkData = {
      authThreshold: new u8(1),
      passExpireTime: new anchor.BN(360),
      networkDataLen: new u16(0),
      fees: [],
      authKeys: [],
    }
  ): GatewayServiceBuilder {
    const authority = this._program.provider.publicKey as PublicKey;
    const instructionPromise = this._program.methods
      .updateNetwork(data)
      .accounts({
        network: Keypair.generate().publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
        //authority,
        payer,
      })
      .instruction();

    return new GatewayServiceBuilder(this, {
      instructionPromise,
      didAccountSizeDeltaCallback: () => {
        throw new Error("Dynamic Alloc not supported");
      },
      allowsDynamicAlloc: false,
      authority: authority,
    });
  }

  // async getNetworkAccount(): Promise<DidDataAccount | null> {
  //   return (await this._program.account.gatekeeperNetwork.fetchNullable(
  //     this._dataAccount
  //   )) as DidDataAccount;
  // }
}

class DummyWallet implements Wallet {
  publicKey: PublicKey;

  constructor() {
    this.publicKey = new PublicKey("11111111111111111111111111111111");
  }

  signAllTransactions(txs: Transaction[]): Promise<Transaction[]> {
    return Promise.reject("DummyWallet does not support signing transactions");
  }

  signTransaction(tx: Transaction): Promise<Transaction> {
    return Promise.reject("DummyWallet does not support signing transactions");
  }
}

export class GatewayServiceBuilder {
  private wallet: Wallet;
  private connection: Connection;
  private confirmOptions: ConfirmOptions;
  private partialSigners: Signer[] = [];
  private readonly idlErrors: Map<number, string>;

  constructor(
    private service: GatewayService,
    private _instruction: BuilderInstruction,
    private authority: PublicKey = PublicKey.default
  ) {
    this.wallet = this.service.getWallet();
    this.connection = this.service.getConnection();
    this.confirmOptions = this.service.getConfrirmOptions();

    this.idlErrors = parseIdlErrors(service.getIdl());
  }

  get instruction(): BuilderInstruction {
    return this._instruction;
  }

  withConnection(connection: Connection): GatewayServiceBuilder {
    this.connection = connection;
    return this;
  }

  withConfirmOptions(confirmOptions: ConfirmOptions): GatewayServiceBuilder {
    this.confirmOptions = confirmOptions;
    return this;
  }

  withSolWallet(solWallet: Wallet): GatewayServiceBuilder {
    this.wallet = solWallet;
    return this;
  }

  // TODO
  withAutomaticAlloc(payer: PublicKey): GatewayServiceBuilder {
    this.authority = payer;
    return this;
  }

  withPartialSigners(...signers: Signer[]) {
    this.partialSigners = signers;
    return this;
  }

  async transaction(): Promise<Transaction> {
    const tx = new Transaction();
    const instructions = await this._instruction.instructionPromise;
    tx.add(instructions);
    return tx;
  }

  async rpc(opts?: ConfirmOptions): Promise<string> {
    const provider = new AnchorProvider(
      this.connection,
      this.wallet,
      this.confirmOptions
    );

    const tx = await this.transaction();
    try {
      return await provider.sendAndConfirm(tx, this.partialSigners, opts);
    } catch (err) {
      throw translateError(err, this.idlErrors);
    }
  }
}

export type BuilderInstruction = {
  instructionPromise: Promise<TransactionInstruction>;
  didAccountSizeDeltaCallback: (didAccountBefore: null) => number;
  allowsDynamicAlloc: boolean;
  authority: PublicKey;
};
