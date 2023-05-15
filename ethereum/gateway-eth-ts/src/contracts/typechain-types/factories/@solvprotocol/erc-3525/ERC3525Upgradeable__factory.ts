/* Autogenerated file. Do not edit manually. */
// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC3525Upgradeable,
  ERC3525UpgradeableInterface,
} from "../../../@solvprotocol/erc-3525/ERC3525Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "ApprovalValue",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "metadataDescriptor",
        type: "address",
      },
    ],
    name: "SetMetadataDescriptor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_oldSlot",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_newSlot",
        type: "uint256",
      },
    ],
    name: "SlotChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "TransferValue",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "operator_",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value_",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
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
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator_",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [],
    name: "metadataDescriptor",
    outputs: [
      {
        internalType: "contract IERC3525MetadataDescriptorUpgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator_",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved_",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "slotOf",
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
        name: "slot_",
        type: "uint256",
      },
    ],
    name: "slotURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index_",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index_",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "fromTokenId_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value_",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "uint256",
        name: "newTokenId",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromTokenId_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toTokenId_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value_",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "valueDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612bb2806100206000396000f3fe6080604052600436106101615760003560e01c80634f6ccce7116100c15780639cc7f7081161007a5780639cc7f708146103a3578063a22cb465146103c3578063b88d4fde146103e3578063c87b56dd146103f6578063e345e0bc14610416578063e8a3d48514610436578063e985e9c51461044b57600080fd5b80634f6ccce7146102fb5780636352211e1461031b57806370a082311461033b578063840f71131461035b5780638cb0a5111461037b57806395d89b411461038e57600080fd5b806318160ddd1161011e57806318160ddd1461024b57806323b872dd14610260578063263f3e7e146102735780632f745c5914610293578063310ed7f0146102b35780633e7e8669146102c657806342842e0e146102e857600080fd5b806301ffc9a71461016657806306fdde031461019b578063081812fc146101bd578063095ea7b3146101f557806309c3dd871461020a5780630f485c021461022a575b600080fd5b34801561017257600080fd5b5061018661018136600461249a565b61046b565b60405190151581526020015b60405180910390f35b3480156101a757600080fd5b506101b061050e565b604051610192919061250f565b3480156101c957600080fd5b506101dd6101d8366004612522565b6105a0565b6040516001600160a01b039091168152602001610192565b610208610203366004612552565b6105f2565b005b34801561021657600080fd5b506101b0610225366004612522565b6106d3565b61023d61023836600461257c565b6107d4565b604051908152602001610192565b34801561025757600080fd5b5060385461023d565b61020861026e3660046125b1565b61080c565b34801561027f57600080fd5b5061023d61028e366004612522565b61083d565b34801561029f57600080fd5b5061023d6102ae366004612552565b610885565b6102086102c13660046125dd565b610926565b3480156102d257600080fd5b5060355460405160ff9091168152602001610192565b6102086102f63660046125b1565b61093c565b34801561030757600080fd5b5061023d610316366004612522565b610957565b34801561032757600080fd5b506101dd610336366004612522565b6109e8565b34801561034757600080fd5b5061023d610356366004612609565b610a58565b34801561036757600080fd5b50603b546101dd906001600160a01b031681565b61020861038936600461257c565b610ae0565b34801561039a57600080fd5b506101b0610ba0565b3480156103af57600080fd5b5061023d6103be366004612522565b610baf565b3480156103cf57600080fd5b506102086103de366004612632565b610bf7565b6102086103f13660046126d8565b610c06565b34801561040257600080fd5b506101b0610411366004612522565b610c38565b34801561042257600080fd5b5061023d610431366004612783565b610cd7565b34801561044257600080fd5b506101b0610d0b565b34801561045757600080fd5b506101866104663660046127af565b610e14565b60006001600160e01b031982166301ffc9a760e01b148061049c57506001600160e01b03198216630354d60560e61b145b806104b757506001600160e01b031982166380ac58cd60e01b145b806104d257506001600160e01b031982166370b0048160e11b145b806104ed57506001600160e01b0319821663780e9d6360e01b145b8061050857506001600160e01b03198216635b5e139f60e01b145b92915050565b60606033805461051d906127d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610549906127d9565b80156105965780601f1061056b57610100808354040283529160200191610596565b820191906000526020600020905b81548152906001019060200180831161057957829003601f168201915b5050505050905090565b60006105ab82610e46565b6000828152603960205260409020546038805490919081106105cf576105cf612814565b60009182526020909120600460069092020101546001600160a01b031692915050565b60006105fd826109e8565b9050806001600160a01b0316836001600160a01b0316141561063a5760405162461bcd60e51b81526004016106319061282a565b60405180910390fd5b336001600160a01b038216148061065657506106568133610e14565b6106c45760405162461bcd60e51b815260206004820152603960248201527f455243333532353a20617070726f76652063616c6c6572206973206e6f74206f6044820152781ddb995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b603a1b6064820152608401610631565b6106ce8383610e6e565b505050565b606060006106ec60408051602081019091526000815290565b603b549091506001600160a01b031661074c57600081511161071d57604051806020016040528060008152506107cd565b8061072784610f05565b60405160200161073892919061286c565b6040516020818303038152906040526107cd565b603b54604051633601bfc560e11b8152600481018590526001600160a01b0390911690636c037f8a906024015b60006040518083038186803b15801561079157600080fd5b505afa1580156107a5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107cd91908101906128ac565b9392505050565b60006107e1338584610fa2565b6107ea84611032565b905061080183826107fa8761083d565b600061103c565b6107cd848284611163565b610816338261145b565b6108325760405162461bcd60e51b815260040161063190612923565b6106ce8383836114ba565b600061084882610e46565b60008281526039602052604090205460388054909190811061086c5761086c612814565b9060005260206000209060060201600101549050919050565b600061089083610a58565b82106108e95760405162461bcd60e51b815260206004820152602260248201527f455243333532353a206f776e657220696e646578206f7574206f6620626f756e604482015261647360f01b6064820152608401610631565b6001600160a01b0383166000908152603a6020526040902080548390811061091357610913612814565b9060005260206000200154905092915050565b610931338483610fa2565b6106ce838383611163565b6106ce83838360405180602001604052806000815250610c06565b600061096260385490565b82106109bc5760405162461bcd60e51b815260206004820152602360248201527f455243333532353a20676c6f62616c20696e646578206f7574206f6620626f756044820152626e647360e81b6064820152608401610631565b603882815481106109cf576109cf612814565b9060005260206000209060060201600001549050919050565b60006109f382610e46565b600082815260396020526040902054603880549091908110610a1757610a17612814565b60009182526020909120600360069092020101546001600160a01b0316905080610a535760405162461bcd60e51b815260040161063190612975565b919050565b60006001600160a01b038216610ac45760405162461bcd60e51b815260206004820152602b60248201527f455243333532353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b6064820152608401610631565b506001600160a01b03166000908152603a602052604090205490565b6000610aeb846109e8565b9050806001600160a01b0316836001600160a01b03161415610b1f5760405162461bcd60e51b81526004016106319061282a565b610b29338561145b565b610b8f5760405162461bcd60e51b815260206004820152603160248201527f455243333532353a20617070726f76652063616c6c6572206973206e6f74206f6044820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b6064820152608401610631565b610b9a84848461161b565b50505050565b60606034805461051d906127d9565b6000610bba82610e46565b600082815260396020526040902054603880549091908110610bde57610bde612814565b9060005260206000209060060201600201549050919050565b610c02338383611753565b5050565b610c10338361145b565b610c2c5760405162461bcd60e51b815260040161063190612923565b610b9a8484848461181e565b6060610c4382610e46565b6000610c5a60408051602081019091526000815290565b603b549091506001600160a01b0316610ca6576000815111610c8b57604051806020016040528060008152506107cd565b80610c9584610f05565b6040516020016107389291906129a8565b603b546040516344a5a61760e11b8152600481018590526001600160a01b039091169063894b4c2e90602401610779565b6000610ce283610e46565b5060009182526037602090815260408084206001600160a01b0393909316845291905290205490565b60606000610d2460408051602081019091526000815290565b603b549091506001600160a01b0316610d84576000815111610d555760405180602001604052806000815250610e0e565b80610d5f30611891565b604051602001610d709291906129d7565b604051602081830303815290604052610e0e565b603b60009054906101000a90046001600160a01b03166001600160a01b031663725fa09c6040518163ffffffff1660e01b815260040160006040518083038186803b158015610dd257600080fd5b505afa158015610de6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e0e91908101906128ac565b91505090565b6001600160a01b039182166000908152603a602090815260408083209390941682526002909201909152205460ff1690565b610e4f816118a7565b610e6b5760405162461bcd60e51b815260040161063190612975565b50565b600081815260396020526040902054603880548492908110610e9257610e92612814565b6000918252602090912060069091020160040180546001600160a01b0319166001600160a01b0392831617905581908316610ecc826109e8565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60606000610f12836118f3565b600101905060008167ffffffffffffffff811115610f3257610f32612669565b6040519080825280601f01601f191660200182016040528015610f5c576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610f9557610f9a565b610f66565b509392505050565b6000610fae8385610cd7565b9050610fba848461145b565b158015610fc957506000198114155b15610b9a578181101561101e5760405162461bcd60e51b815260206004820152601f60248201527f455243333532353a20696e73756666696369656e7420616c6c6f77616e6365006044820152606401610631565b610b9a838561102d8585612a31565b61161b565b60006105086119cb565b6001600160a01b03841661109c5760405162461bcd60e51b815260206004820152602160248201527f455243333532353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b6064820152608401610631565b826110f35760405162461bcd60e51b815260206004820152602160248201527f455243333532353a2063616e6e6f74206d696e74207a65726f20746f6b656e496044820152601960fa1b6064820152608401610631565b6110fc836118a7565b156111495760405162461bcd60e51b815260206004820152601d60248201527f455243333532353a20746f6b656e20616c7265616479206d696e7465640000006044820152606401610631565b6111548484846119e2565b61115e8382611aa8565b610b9a565b61116c836118a7565b6111c85760405162461bcd60e51b815260206004820152602760248201527f455243333532353a207472616e736665722066726f6d20696e76616c696420746044820152661bdad95b88125160ca1b6064820152608401610631565b6111d1826118a7565b61122b5760405162461bcd60e51b815260206004820152602560248201527f455243333532353a207472616e7366657220746f20696e76616c696420746f6b604482015264195b88125160da1b6064820152608401610631565b60008381526039602052604081205460388054909190811061124f5761124f612814565b906000526020600020906006020190506000603860396000868152602001908152602001600020548154811061128757611287612814565b9060005260206000209060060201905082826002015410156112fe5760405162461bcd60e51b815260206004820152602a60248201527f455243333532353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b6064820152608401610631565b806001015482600101541461136c5760405162461bcd60e51b815260206004820152602e60248201527f455243333532353a207472616e7366657220746f20746f6b656e20776974682060448201526d191a5999995c995b9d081cdb1bdd60921b6064820152608401610631565b828260020160008282546113809190612a31565b925050819055508281600201600082825461139b9190612a48565b9091555050604051838152849086907f0b2aac84f3ec956911fd78eae5311062972ff949f38412e8da39069d9f068cc69060200160405180910390a36113f285858560405180602001604052806000815250611b2d565b6114545760405162461bcd60e51b815260206004820152602d60248201527f455243333532353a207472616e736665722072656a656374656420627920455260448201526c21999a991aa932b1b2b4bb32b960991b6064820152608401610631565b5050505050565b600080611467836109e8565b9050806001600160a01b0316846001600160a01b0316148061148e575061148e8185610e14565b806114b25750836001600160a01b03166114a7846105a0565b6001600160a01b0316145b949350505050565b826001600160a01b03166114cd826109e8565b6001600160a01b03161461152f5760405162461bcd60e51b8152602060048201526024808201527f455243333532353a207472616e736665722066726f6d20696e76616c6964206f6044820152633bb732b960e11b6064820152608401610631565b6001600160a01b0382166115935760405162461bcd60e51b815260206004820152602560248201527f455243333532353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608401610631565b600061159e8261083d565b905060006115ab83610baf565b90506115b8600084610e6e565b6115c183611c80565b6115cb8584611d2b565b6115d58484611e4c565b82846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611454565b6001600160a01b0382166116845760405162461bcd60e51b815260206004820152602a60248201527f455243333532353a20617070726f76652076616c756520746f20746865207a65604482015269726f206164647265737360b01b6064820152608401610631565b61168e8284611ed5565b6116f4576000838152603960205260409020546038805490919081106116b6576116b6612814565b60009182526020808320600692909202909101600501805460018101825590835291200180546001600160a01b0319166001600160a01b0384161790555b60008381526037602090815260408083206001600160a01b038616808552908352928190208490555183815285917f621b050de0ad08b51d19b48b3e6df75348c4de6bdd93e81b252ca62e28265b1b91015b60405180910390a3505050565b816001600160a01b0316836001600160a01b031614156117b55760405162461bcd60e51b815260206004820152601a60248201527f455243333532353a20617070726f766520746f2063616c6c65720000000000006044820152606401610631565b6001600160a01b038381166000818152603a602090815260408083209487168084526002909501825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319101611746565b6118298484846114ba565b61183584848484611fa9565b610b9a5760405162461bcd60e51b815260206004820152602760248201527f455243333532353a207472616e7366657220746f206e6f6e204552433732315260448201526632b1b2b4bb32b960c91b6064820152608401610631565b60606105086001600160a01b03831660146120fe565b6038546000901580159061050857506000828152603960205260409020546038805484929081106118da576118da612814565b9060005260206000209060060201600001541492915050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106119325772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061195e576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061197c57662386f26fc10000830492506010015b6305f5e1008310611994576305f5e100830492506008015b61271083106119a857612710830492506004015b606483106119ba576064830492506002015b600a83106105085760010192915050565b60006119db603680546001019055565b5060365490565b6040805160c081018252838152602080820184905260008284018190526001600160a01b038716606084015260808301819052835181815291820190935260a08201529050611a308161229a565b611a3a8484611e4c565b60405183906001600160a01b038616906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4816000847fe4f48c240d3b994948aa54f3e2f5fca59263dfe1d52b6e4cf39a5d249b5ccb6560405160405180910390a450505050565b600082815260396020526040902054603880548392908110611acc57611acc612814565b90600052602060002090600602016002016000828254611aec9190612a48565b909155505060405181815282906000907f0b2aac84f3ec956911fd78eae5311062972ff949f38412e8da39069d9f068cc69060200160405180910390a35050565b600080611b39856109e8565b90506001600160a01b0381163b15158015611bcc57506040516301ffc9a760e01b8152629ce20b60e01b60048201526001600160a01b038216906301ffc9a79060240160206040518083038186803b158015611b9457600080fd5b505afa158015611ba8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bcc9190612a60565b15611c7457604051629ce20b60e01b81526000906001600160a01b03831690629ce20b90611c069033908b908b908b908b90600401612a7d565b602060405180830381600087803b158015611c2057600080fd5b505af1158015611c34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c589190612abb565b6001600160e01b031916629ce20b60e01b1492506114b2915050565b50600195945050505050565b600081815260396020526040812054603880549091908110611ca457611ca4612814565b600091825260208220600560069092020190810154909250905b81811015611d1c576000836005018281548110611cdd57611cdd612814565b60009182526020808320909101548783526037825260408084206001600160a01b03909216845291528120555080611d1481612ad8565b915050611cbe565b506106ce6005830160006123ec565b600081815260396020526040812054603880549091908110611d4f57611d4f612814565b6000918252602080832060069290920290910160030180546001600160a01b0319166001600160a01b039485161790559184168152603a909152604081208054909190611d9e90600190612a31565b90506000826000018281548110611db757611db7612814565b90600052602060002001549050600083600101600086815260200190815260200160002054905081846000018281548110611df457611df4612814565b60009182526020808320909101929092558381526001860190915260408082208390558682528120558354849080611e2e57611e2e612af3565b60019003818190600052602060002001600090559055505050505050565b600081815260396020526040902054603880548492908110611e7057611e70612814565b6000918252602080832060069290920290910160030180546001600160a01b0319166001600160a01b03948516179055939091168152603a80845260408083208054858552600182810188529285208190559286529082018155825292902090910155565b600081815260396020526040812054603880548392908110611ef957611ef9612814565b6000918252602082206005600690920201015491505b81811015611f9e57600084815260396020526040902054603880546001600160a01b03881692908110611f4457611f44612814565b90600052602060002090600602016005018281548110611f6657611f66612814565b6000918252602090912001546001600160a01b03161415611f8c57600192505050610508565b80611f9681612ad8565b915050611f0f565b506000949350505050565b60006001600160a01b0384163b156120f657604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611fed903390899088908890600401612b09565b602060405180830381600087803b15801561200757600080fd5b505af1925050508015612037575060408051601f3d908101601f1916820190925261203491810190612abb565b60015b6120dc573d808015612065576040519150601f19603f3d011682016040523d82523d6000602084013e61206a565b606091505b5080516120d45760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610631565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506114b2565b5060016114b2565b6060600061210d836002612b46565b612118906002612a48565b67ffffffffffffffff81111561213057612130612669565b6040519080825280601f01601f19166020018201604052801561215a576020820181803683370190505b509050600360fc1b8160008151811061217557612175612814565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106121a4576121a4612814565b60200101906001600160f81b031916908160001a90535060006121c8846002612b46565b6121d3906001612a48565b90505b600181111561224b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061220757612207612814565b1a60f81b82828151811061221d5761221d612814565b60200101906001600160f81b031916908160001a90535060049490941c9361224481612b65565b90506121d6565b5083156107cd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610631565b603880548251600090815260396020908152604080832084905560018401855593909152835160069092027f38395c5dceade9603479b177b68959049485df8aa97b39f3533039af5f4561998101928355818501517f38395c5dceade9603479b177b68959049485df8aa97b39f3533039af5f45619a820155928401517f38395c5dceade9603479b177b68959049485df8aa97b39f3533039af5f45619b84015560608401517f38395c5dceade9603479b177b68959049485df8aa97b39f3533039af5f45619c840180546001600160a01b039283166001600160a01b03199182161790915560808601517f38395c5dceade9603479b177b68959049485df8aa97b39f3533039af5f45619d8601805491909316911617905560a084015180518594610b9a937f38395c5dceade9603479b177b68959049485df8aa97b39f3533039af5f45619e90910192019061240a565b5080546000825590600052602060002090810190610e6b919061246f565b82805482825590600052602060002090810192821561245f579160200282015b8281111561245f57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061242a565b5061246b92915061246f565b5090565b5b8082111561246b5760008155600101612470565b6001600160e01b031981168114610e6b57600080fd5b6000602082840312156124ac57600080fd5b81356107cd81612484565b60005b838110156124d25781810151838201526020016124ba565b83811115610b9a5750506000910152565b600081518084526124fb8160208601602086016124b7565b601f01601f19169290920160200192915050565b6020815260006107cd60208301846124e3565b60006020828403121561253457600080fd5b5035919050565b80356001600160a01b0381168114610a5357600080fd5b6000806040838503121561256557600080fd5b61256e8361253b565b946020939093013593505050565b60008060006060848603121561259157600080fd5b833592506125a16020850161253b565b9150604084013590509250925092565b6000806000606084860312156125c657600080fd5b6125cf8461253b565b92506125a16020850161253b565b6000806000606084860312156125f257600080fd5b505081359360208301359350604090920135919050565b60006020828403121561261b57600080fd5b6107cd8261253b565b8015158114610e6b57600080fd5b6000806040838503121561264557600080fd5b61264e8361253b565b9150602083013561265e81612624565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156126a8576126a8612669565b604052919050565b600067ffffffffffffffff8211156126ca576126ca612669565b50601f01601f191660200190565b600080600080608085870312156126ee57600080fd5b6126f78561253b565b93506127056020860161253b565b925060408501359150606085013567ffffffffffffffff81111561272857600080fd5b8501601f8101871361273957600080fd5b803561274c612747826126b0565b61267f565b81815288602083850101111561276157600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b6000806040838503121561279657600080fd5b823591506127a66020840161253b565b90509250929050565b600080604083850312156127c257600080fd5b6127cb8361253b565b91506127a66020840161253b565b600181811c908216806127ed57607f821691505b6020821081141561280e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b60208082526022908201527f455243333532353a20617070726f76616c20746f2063757272656e74206f776e60408201526132b960f11b606082015260800190565b6000835161287e8184602088016124b7565b64736c6f742f60d81b90830190815283516128a08160058401602088016124b7565b01600501949350505050565b6000602082840312156128be57600080fd5b815167ffffffffffffffff8111156128d557600080fd5b8201601f810184136128e657600080fd5b80516128f4612747826126b0565b81815285602083850101111561290957600080fd5b61291a8260208301602086016124b7565b95945050505050565b60208082526032908201527f455243333532353a207472616e736665722063616c6c6572206973206e6f74206040820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b606082015260800190565b602080825260199082015278115490cccd4c8d4e881a5b9d985b1a59081d1bdad95b881251603a1b604082015260600190565b600083516129ba8184602088016124b7565b8351908301906129ce8183602088016124b7565b01949350505050565b600083516129e98184602088016124b7565b68636f6e74726163742f60b81b9083019081528351612a0f8160098401602088016124b7565b01600901949350505050565b634e487b7160e01b600052601160045260246000fd5b600082821015612a4357612a43612a1b565b500390565b60008219821115612a5b57612a5b612a1b565b500190565b600060208284031215612a7257600080fd5b81516107cd81612624565b60018060a01b038616815284602082015283604082015282606082015260a060808201526000612ab060a08301846124e3565b979650505050505050565b600060208284031215612acd57600080fd5b81516107cd81612484565b6000600019821415612aec57612aec612a1b565b5060010190565b634e487b7160e01b600052603160045260246000fd5b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612b3c908301846124e3565b9695505050505050565b6000816000190483118215151615612b6057612b60612a1b565b500290565b600081612b7457612b74612a1b565b50600019019056fea264697066735822122000b6020e0907b75cb5a02ee87f5b30508c08695a22891dc43e48d8c12b89bc3a64736f6c63430008090033";

type ERC3525UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC3525UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC3525Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC3525UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC3525Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC3525Upgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC3525Upgradeable {
    return super.attach(address) as ERC3525Upgradeable;
  }
  override connect(signer: Signer): ERC3525Upgradeable__factory {
    return super.connect(signer) as ERC3525Upgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC3525UpgradeableInterface {
    return new utils.Interface(_abi) as ERC3525UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC3525Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC3525Upgradeable;
  }
}
