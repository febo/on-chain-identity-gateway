/* Autogenerated file. Do not edit manually. */
// @ts-nocheck
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1967Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC20PresetFixedSupply",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PresetFixedSupply__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ERC3525Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC3525Upgradeable__factory>;
    getContractFactory(
      name: "IERC3525MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC3525MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC721EnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721EnumerableUpgradeable__factory>;
    getContractFactory(
      name: "IERC721MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC3525",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC3525__factory>;
    getContractFactory(
      name: "IERC3525ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC3525ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC3525Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC3525Upgradeable__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Upgradeable__factory>;
    getContractFactory(
      name: "IERC3525MetadataDescriptorUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC3525MetadataDescriptorUpgradeable__factory>;
    getContractFactory(
      name: "ChargeHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChargeHandler__factory>;
    getContractFactory(
      name: "FlagsStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlagsStorage__factory>;
    getContractFactory(
      name: "FlexibleNonceForwarder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlexibleNonceForwarder__factory>;
    getContractFactory(
      name: "Gated",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Gated__factory>;
    getContractFactory(
      name: "GatewayToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatewayToken__factory>;
    getContractFactory(
      name: "IERC721Expirable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Expirable__factory>;
    getContractFactory(
      name: "IERC721Freezable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Freezable__factory>;
    getContractFactory(
      name: "IERC721Revokable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Revokable__factory>;
    getContractFactory(
      name: "IFlagsStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFlagsStorage__factory>;
    getContractFactory(
      name: "IForwarder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IForwarder__factory>;
    getContractFactory(
      name: "IGatewayToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGatewayToken__factory>;
    getContractFactory(
      name: "IGatewayTokenVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGatewayTokenVerifier__factory>;
    getContractFactory(
      name: "IParameterizedAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IParameterizedAccessControl__factory>;
    getContractFactory(
      name: "MultiERC2771Context",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiERC2771Context__factory>;
    getContractFactory(
      name: "ParameterizedAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ParameterizedAccessControl__factory>;
    getContractFactory(
      name: "TokenBitMask",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenBitMask__factory>;
    getContractFactory(
      name: "DummyERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DummyERC20__factory>;
    getContractFactory(
      name: "GatewayTokenClientTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatewayTokenClientTest__factory>;
    getContractFactory(
      name: "GatewayTokenInternalsTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatewayTokenInternalsTest__factory>;
    getContractFactory(
      name: "GatewayTokenUpgradeTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatewayTokenUpgradeTest__factory>;
    getContractFactory(
      name: "StubMultisig",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StubMultisig__factory>;
    getContractFactory(
      name: "GatewayTokenV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatewayTokenV0__factory>;
    getContractFactory(
      name: "IERC721ExpirableV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721ExpirableV0__factory>;
    getContractFactory(
      name: "IGatewayTokenV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGatewayTokenV0__factory>;

    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC1967Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC20PresetFixedSupply",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20PresetFixedSupply>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ERC3525Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC3525Upgradeable>;
    getContractAt(
      name: "IERC3525MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC3525MetadataUpgradeable>;
    getContractAt(
      name: "IERC721EnumerableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721EnumerableUpgradeable>;
    getContractAt(
      name: "IERC721MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721MetadataUpgradeable>;
    getContractAt(
      name: "IERC3525",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC3525>;
    getContractAt(
      name: "IERC3525ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC3525ReceiverUpgradeable>;
    getContractAt(
      name: "IERC3525Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC3525Upgradeable>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721ReceiverUpgradeable>;
    getContractAt(
      name: "IERC721Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Upgradeable>;
    getContractAt(
      name: "IERC3525MetadataDescriptorUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC3525MetadataDescriptorUpgradeable>;
    getContractAt(
      name: "ChargeHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChargeHandler>;
    getContractAt(
      name: "FlagsStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlagsStorage>;
    getContractAt(
      name: "FlexibleNonceForwarder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlexibleNonceForwarder>;
    getContractAt(
      name: "Gated",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Gated>;
    getContractAt(
      name: "GatewayToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GatewayToken>;
    getContractAt(
      name: "IERC721Expirable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Expirable>;
    getContractAt(
      name: "IERC721Freezable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Freezable>;
    getContractAt(
      name: "IERC721Revokable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Revokable>;
    getContractAt(
      name: "IFlagsStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFlagsStorage>;
    getContractAt(
      name: "IForwarder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IForwarder>;
    getContractAt(
      name: "IGatewayToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGatewayToken>;
    getContractAt(
      name: "IGatewayTokenVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGatewayTokenVerifier>;
    getContractAt(
      name: "IParameterizedAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IParameterizedAccessControl>;
    getContractAt(
      name: "MultiERC2771Context",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiERC2771Context>;
    getContractAt(
      name: "ParameterizedAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ParameterizedAccessControl>;
    getContractAt(
      name: "TokenBitMask",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenBitMask>;
    getContractAt(
      name: "DummyERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DummyERC20>;
    getContractAt(
      name: "GatewayTokenClientTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GatewayTokenClientTest>;
    getContractAt(
      name: "GatewayTokenInternalsTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GatewayTokenInternalsTest>;
    getContractAt(
      name: "GatewayTokenUpgradeTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GatewayTokenUpgradeTest>;
    getContractAt(
      name: "StubMultisig",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StubMultisig>;
    getContractAt(
      name: "GatewayTokenV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GatewayTokenV0>;
    getContractAt(
      name: "IERC721ExpirableV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721ExpirableV0>;
    getContractAt(
      name: "IGatewayTokenV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGatewayTokenV0>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
