import * as anchor from '@project-serum/anchor';
import { Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { exec as execCB } from 'child_process';
import * as util from 'util';
import {
  airdrop,
  AdminService,
  NetworkService,
} from '@identity.com/gateway-solana-client';
import { createMint } from '@solana/spl-token';
import * as fs from 'fs';
import { setGatekeeperFlags } from '../src/util/lib';
import { SolanaAnchorGateway } from '@identity.com/gateway-solana-idl';
import { TEST_GUARDIAN } from '../src/util/constants';

const exec = util.promisify(execCB);

const accountsFixturePath = './packages/tests/fixtures/accounts';
const keypairsFixturePath = './packages/tests/fixtures/keypairs';

anchor.setProvider(anchor.AnchorProvider.env());
const program = anchor.workspace
  .SolanaAnchorGateway as anchor.Program<SolanaAnchorGateway>;
const programProvider = program.provider as anchor.AnchorProvider;

const saveAccountToFile = async (publicKeyBase58: string, filename: string) => {
  return exec(
    `solana account ${publicKeyBase58} -ul -o ${accountsFixturePath}/${filename}.json --output json`
  );
};

/**
 * Loads a keypair from file in the fixtures, and optionally airdrop
 *
 * @param publicKey The public key of the keypair to load
 * @param airdrop The amount to airdrop
 */
const loadKeypair = async (
  publicKeyBase58: string,
  airdropAmount = 0
): Promise<Keypair> => {
  const filename = `${keypairsFixturePath}/${publicKeyBase58}.json`;

  const keypair = Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(fs.readFileSync(filename).toString()))
  );

  if (airdropAmount > 0) {
    await airdrop(programProvider.connection, keypair.publicKey, airdropAmount);
  }

  return keypair;
};

const accountExists = async (account: PublicKey) =>
  (await programProvider.connection.getAccountInfo(account, 'confirmed')) !==
  null;

const createTestTokenAccount = async () => {
  // Create and save the mint authority
  const mintAuthority = await loadKeypair(
    '9SkxBuj9kuaJQ3yAXEuRESjYt14BcPUTac25Mbi1n8ny',
    LAMPORTS_PER_SOL
  );
  await saveAccountToFile(mintAuthority.publicKey.toBase58(), 'mint-authority');

  const mintAccount = await loadKeypair(
    'wLYV8imcPhPDZ3JJvUgSWv2p6PNz4RfFtveqn4esJGX'
  );

  if (!(await accountExists(mintAccount.publicKey))) {
    // Create and save the mint
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const mint = await createMint(
      programProvider.connection,
      mintAuthority,
      mintAuthority.publicKey,
      null,
      0,
      mintAccount
    );
  }

  await saveAccountToFile(mintAccount.publicKey.toBase58(), 'mint-account');

  console.log(
    `Created mint account ${mintAccount.publicKey.toBase58()} for mint authority ${mintAuthority.publicKey.toBase58()}`
  );
};

const createNetworkAccount = async (
  authorityBase58: string,
  filename: string
): Promise<PublicKey> => {
  const authorityKeypair = await loadKeypair(authorityBase58, LAMPORTS_PER_SOL);
  const authority = new anchor.Wallet(authorityKeypair);
  const guardian = new anchor.Wallet(
    await loadKeypair(TEST_GUARDIAN.toBase58())
  );

  await airdrop(programProvider.connection, guardian.publicKey);

  const service = await AdminService.buildFromAnchor(
    program,
    authority.publicKey,
    {
      clusterType: 'localnet',
      wallet: guardian,
    },
    programProvider
  );
  const foundAccount = await service.getNetworkAccount();

  if (!foundAccount) {
    await service.createNetwork().withPartialSigners(authorityKeypair).rpc();
  }

  const authBase58 = authority.publicKey.toBase58();

  await saveAccountToFile(authBase58, filename);

  console.log(`Created Network ${authBase58}`);

  return authority.publicKey;
};

const createGatekeeperAccount = async (
  network: PublicKey,
  authorityBase58: string,
  filename: string
) => {
  const authorityKeypair = await loadKeypair(authorityBase58, LAMPORTS_PER_SOL);
  const authority = new anchor.Wallet(authorityKeypair);

  await airdrop(
    programProvider.connection,
    authority.publicKey,
    LAMPORTS_PER_SOL * 2
  );

  const [dataAccount] = await NetworkService.createGatekeeperAddress(
    authority.publicKey,
    network
  );

  const [stakingDataAccount] = await NetworkService.createStakingAddress(
    authorityKeypair.publicKey
  );

  const service = await NetworkService.buildFromAnchor(
    program,
    authority.publicKey,
    dataAccount,
    {
      clusterType: 'localnet',
      wallet: authority,
    },
    programProvider
  );

  const foundAccount = await service.getGatekeeperAccount();

  if (!foundAccount) {
    console.log(
      'Creating data account with staking account: ' + stakingDataAccount
    );

    await service.createGatekeeper(network, stakingDataAccount).rpc();

    await setGatekeeperFlags(stakingDataAccount, service, 65535);
  }

  await saveAccountToFile(dataAccount.toBase58(), filename);

  console.log(
    `Created Gatekeeper ${dataAccount.toBase58()} with authority ${authorityBase58}`
  );
};

(async () => {
  // Create the main network account to be used in tests
  const networkAccount = await createNetworkAccount(
    'B4951ZxztgHL98WT4eFUyaaRmsi6V4hBzkoYe1VSNweo',
    'network'
  );

  // Create an alternative network account to be used in tests
  const altNetworkAccount = await createNetworkAccount(
    'DuqrwqMDuVwgd2BNbCFQS5gwNuZcfgjuL6KpuvjGjaYa',
    'network-alt'
  );

  // Create the main gatekeeper in the main network for tests
  await createGatekeeperAccount(
    networkAccount,
    'B4951ZxztgHL98WT4eFUyaaRmsi6V4hBzkoYe1VSNweo',
    'gatekeeper'
  );

  // Create an alternative gatekeeper in the main network for tests
  await createGatekeeperAccount(
    networkAccount,
    'DuqrwqMDuVwgd2BNbCFQS5gwNuZcfgjuL6KpuvjGjaYa',
    'gatekeeper-alt'
  );

  // Create a gatekeeper in an alternative network for tests
  await createGatekeeperAccount(
    altNetworkAccount,
    '6ufu3BBssTiNhQ5ejtkNGfqksXQatAZ5aVFVPNQy8wu9',
    'gatekeeper-invalid'
  );

  // Create a mint account for testing
  await createTestTokenAccount();
})().catch(console.error);
