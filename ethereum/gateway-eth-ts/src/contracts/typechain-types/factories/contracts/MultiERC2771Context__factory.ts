/* Autogenerated file. Do not edit manually. */
// @ts-nocheck
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MultiERC2771Context,
  MultiERC2771ContextInterface,
} from "../../contracts/MultiERC2771Context";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class MultiERC2771Context__factory {
  static readonly abi = _abi;
  static createInterface(): MultiERC2771ContextInterface {
    return new utils.Interface(_abi) as MultiERC2771ContextInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiERC2771Context {
    return new Contract(address, _abi, signerOrProvider) as MultiERC2771Context;
  }
}
