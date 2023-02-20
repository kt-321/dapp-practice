// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract TryInlineAssembly {
    constructor() {}

    event LogUint(uint256 num);

    function useStorage2() public returns (uint256 v1, uint256 v2, uint256 v3){
        assembly {
            sstore(0x0, 100)
            v1 := sload(0x0)
            // non-zero to non-zero
            sstore(0x0, 10)
            v2 := sload(0x0)
            // non-zero to non-zero
            sstore(0x0, 200)
            v3 := sload(0x0)
        }
    }
    function useStorage1() public returns (uint256 v1, uint256 v2, uint256 v3){
        assembly {
            sstore(0x0, 100)
            v1 := sload(0x0)
            // non-zero to zero
            sstore(0x0, 0)
            v2 := sload(0x0)
            // zero to non-zero
            sstore(0x0, 200)
            v3 := sload(0x0)
        }
    }

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

    function addition(uint x, uint y) public returns (uint256){
        uint res1 = 0;
        uint res2 = 0;
        assembly {
            let result := add(x, y)
            mstore(0x0, result)

            // return (0x0,32)
            let empty := mload(0x40) // get free memory pointer
            mstore(empty, result)
            res1 := result
            empty := mload(0x40) // get free memory pointer
            mstore(empty, 16)
            res2 := mload(empty)
            // return (empty, 32) // return 32 bytes from memory address 0x0
        }
        emit LogUint(res1);
        emit LogUint(res2);
        return res2;
    }

    function uncheck(
        uint x,
        uint y
    ) public pure returns(uint256){
        // return x+y;
        unchecked {
            return x + y;
        }
    }
}
