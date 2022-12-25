/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

import type {
  IBeaconUpgradeable,
  IBeaconUpgradeableInterface,
} from "../../../../../@openzeppelin/contracts-upgradeable/proxy/beacon/IBeaconUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "implementation",
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
] as const;

export class IBeaconUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IBeaconUpgradeableInterface {
    return new utils.Interface(_abi) as IBeaconUpgradeableInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IBeaconUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as IBeaconUpgradeable;
  }
}
