/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";

export interface TryInlineAssemblyInterface extends utils.Interface {
  functions: {
    "addition(uint256,uint256)": FunctionFragment;
    "useMemory(uint256)": FunctionFragment;
    "useStorage1()": FunctionFragment;
    "useStorage2()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "addition" | "useMemory" | "useStorage1" | "useStorage2"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addition",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "useMemory", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: "useStorage1", values?: undefined): string;
  encodeFunctionData(functionFragment: "useStorage2", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addition", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "useMemory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "useStorage1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "useStorage2", data: BytesLike): Result;

  events: {};
}

export interface TryInlineAssembly extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TryInlineAssemblyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addition(
      x: PromiseOrValue<BigNumberish>,
      y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    useMemory(a: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    useStorage1(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    useStorage2(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;
  };

  addition(
    x: PromiseOrValue<BigNumberish>,
    y: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  useMemory(a: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  useStorage1(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  useStorage2(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  callStatic: {
    addition(
      x: PromiseOrValue<BigNumberish>,
      y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    useMemory(a: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    useStorage1(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        v1: BigNumber;
        v2: BigNumber;
        v3: BigNumber;
      }
    >;

    useStorage2(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        v1: BigNumber;
        v2: BigNumber;
        v3: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    addition(
      x: PromiseOrValue<BigNumberish>,
      y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    useMemory(a: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    useStorage1(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    useStorage2(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    addition(
      x: PromiseOrValue<BigNumberish>,
      y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    useMemory(a: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    useStorage1(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    useStorage2(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;
  };
}
