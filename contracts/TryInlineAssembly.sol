// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract TryInlineAssembly {
    constructor() {}

    function useMemory(uint a) public pure returns (uint256){
        uint[] memory array_num1 = new uint[](a);
        uint res = 0;

        assembly {
            // next free memory pointer
            res := mload(0x40)
        }

        // The bigger the value of a, the bigger the value of res
        return res;
    }

    function addition(uint x, uint y) public pure returns (uint256){
        assembly {
            let result := add(x, y)
            mstore(0x0, result)
            return (0x0, 32)
        }
    }
}
