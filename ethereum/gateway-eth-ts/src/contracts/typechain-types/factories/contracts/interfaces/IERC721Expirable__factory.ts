/* Autogenerated file. Do not edit manually. */
// @ts-nocheck
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC721Expirable,
  IERC721ExpirableInterface,
} from "../../../contracts/interfaces/IERC721Expirable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Expiration",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "expiration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "enum ChargeType",
            name: "chargeType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
        ],
        internalType: "struct Charge",
        name: "charge",
        type: "tuple",
      },
    ],
    name: "setExpiration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERC721Expirable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721ExpirableInterface {
    return new utils.Interface(_abi) as IERC721ExpirableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC721Expirable {
    return new Contract(address, _abi, signerOrProvider) as IERC721Expirable;
  }
}
