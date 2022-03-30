import { Command, Flags } from "@oclif/core";
import { BigNumber, utils, Wallet } from "ethers";
import { BaseProvider } from "@ethersproject/providers";
import { GatewayToken } from "../contracts/GatewayToken";
import {
  privateKeyFlag,
  gatewayTokenAddressFlag,
  networkFlag,
  gasPriceFeeFlag,
  confirmationsFlag,
} from "../utils/flags";
import { TxBase } from "../utils/tx";
import { mnemonicSigner, privateKeySigner } from "../utils/signer";

export default class RemoveNetworkAuthority extends Command {
  static description = "Remove network authority to a GatewayToken contract";

  static examples = [
    `$ gateway remove-network-authority 0x893F4Be53274353CD3379C87C8fd1cb4f8458F94
		`,
  ];

  static flags = {
    help: Flags.help({ char: "h" }),
    privateKey: privateKeyFlag(),
    gatewayTokenAddress: gatewayTokenAddressFlag(),
    network: networkFlag(),
    gasPriceFee: gasPriceFeeFlag(),
    confirmations: confirmationsFlag(),
  };

  static args = [
    {
      name: "address",
      required: true,
      description:
        "Network authority address to remove to the GatewayToken contract",
      parse: async (input: string): Promise<string> =>
        utils.isAddress(input) ? input : null,
    },
  ];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(RemoveNetworkAuthority);

    const pk = flags.privateKey;
    const provider: BaseProvider = flags.network;
    let signer: Wallet;
    const confirmations = flags.confirmations;

    signer = utils.isValidMnemonic(pk)
      ? mnemonicSigner(pk, provider)
      : privateKeySigner(pk, provider);

    const authority: string = args.address;

    signer = signer.connect(provider);

    const gatewayTokenAddress: string = flags.gatewayTokenAddress;

    this.log(`Removing:
			network authority ${authority} 
			to GatewayToken ${gatewayTokenAddress}`);

    const gatewayToken = new GatewayToken(signer, gatewayTokenAddress);

    const gasPrice = await flags.gasPriceFee;
    const gasLimit =
      await gatewayToken.contract.estimateGas.removeNetworkAuthority(authority);

    const txParams: TxBase = {
      gasLimit: gasLimit,
      gasPrice: BigNumber.from(utils.parseUnits(String(gasPrice), "gwei")),
    };

    const tx: any = await (confirmations > 0
      ? (
          await gatewayToken.removeNetworkAuthority(authority, txParams)
        ).wait(confirmations)
      : gatewayToken.removeNetworkAuthority(authority, txParams));

    this.log(
      `Removed network authority on Gateway Token contract. TxHash: ${
        confirmations > 0 ? tx.transactionHash : tx.hash
      }`
    );
  }
}
