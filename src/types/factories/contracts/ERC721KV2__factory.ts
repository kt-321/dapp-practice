/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

import type { PromiseOrValue } from "../../common";
import type { ERC721KV2, ERC721KV2Interface } from "../../contracts/ERC721KV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
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
    inputs: [],
    name: "helloV2",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
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
        name: "tokenId",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060008060019054906101000a900460ff16159050808015620000445750600160008054906101000a900460ff1660ff16105b8062000080575062000061306200016360201b62000c3c1760201c565b1580156200007f5750600160008054906101000a900460ff1660ff16145b5b620000c2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000b9906200020d565b60405180910390fd5b60016000806101000a81548160ff021916908360ff160217905550801562000100576001600060016101000a81548160ff0219169083151502179055505b80156200015c5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405162000153919062000289565b60405180910390a15b50620002a6565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000620001f5602e8362000186565b9150620002028262000197565b604082019050919050565b600060208201905081810360008301526200022881620001e6565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b6000620002716200026b62000265846200022f565b62000246565b62000239565b9050919050565b620002838162000250565b82525050565b6000602082019050620002a0600083018462000278565b92915050565b612f7880620002b66000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80636a627842116100a2578063a22cb46511610071578063a22cb465146102cb578063b88d4fde146102e7578063beabacc814610303578063c87b56dd1461031f578063e985e9c51461034f57610116565b80636a6278421461025757806370a08231146102735780638129fc1c146102a357806395d89b41146102ad57610116565b806318c113f3116100e957806318c113f3146101b557806323b872dd146101d357806342842e0e146101ef57806342966c681461020b5780636352211e1461022757610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611dd8565b61037f565b6040516101429190611e20565b60405180910390f35b610153610461565b6040516101609190611ecb565b60405180910390f35b610183600480360381019061017e9190611f23565b6104f3565b6040516101909190611f91565b60405180910390f35b6101b360048036038101906101ae9190611fd8565b610539565b005b6101bd610650565b6040516101ca9190611ecb565b60405180910390f35b6101ed60048036038101906101e89190612018565b61068d565b005b61020960048036038101906102049190612018565b6106ed565b005b61022560048036038101906102209190611f23565b61070d565b005b610241600480360381019061023c9190611f23565b610719565b60405161024e9190611f91565b60405180910390f35b610271600480360381019061026c919061206b565b61079f565b005b61028d6004803603810190610288919061206b565b6107c5565b60405161029a91906120a7565b60405180910390f35b6102ab61087c565b005b6102b5610a26565b6040516102c29190611ecb565b60405180910390f35b6102e560048036038101906102e091906120ee565b610ab8565b005b61030160048036038101906102fc9190612263565b610ace565b005b61031d60048036038101906103189190612018565b610b30565b005b61033960048036038101906103349190611f23565b610b40565b6040516103469190611ecb565b60405180910390f35b610369600480360381019061036491906122e6565b610ba8565b6040516103769190611e20565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061044a57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061045a575061045982610c5f565b5b9050919050565b60606065805461047090612355565b80601f016020809104026020016040519081016040528092919081815260200182805461049c90612355565b80156104e95780601f106104be576101008083540402835291602001916104e9565b820191906000526020600020905b8154815290600101906020018083116104cc57829003601f168201915b5050505050905090565b60006104fe82610cc9565b6069600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061054482610719565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ab906123f8565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105d3610d14565b73ffffffffffffffffffffffffffffffffffffffff1614806106025750610601816105fc610d14565b610ba8565b5b610641576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106389061248a565b60405180910390fd5b61064b8383610d1c565b505050565b60606040518060400160405280600581526020017f68656c6c6f000000000000000000000000000000000000000000000000000000815250905090565b61069e610698610d14565b82610dd5565b6106dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d49061251c565b60405180910390fd5b6106e8838383610e6a565b505050565b61070883838360405180602001604052806000815250610ace565b505050565b61071681611163565b50565b600080610725836112b1565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610796576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078d90612588565b60405180910390fd5b80915050919050565b6107a960976112ee565b60006107b56097611304565b90506107c18282611312565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082c9061261a565b60405180910390fd5b606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060019054906101000a900460ff161590508080156108ad5750600160008054906101000a900460ff1660ff16105b806108da57506108bc30610c3c565b1580156108d95750600160008054906101000a900460ff1660ff16145b5b610919576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610910906126ac565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610956576001600060016101000a81548160ff0219169083151502179055505b6109ca6040518060400160405280600781526020017f4552433732314b000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f45524b0000000000000000000000000000000000000000000000000000000000815250611330565b8015610a235760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610a1a919061271e565b60405180910390a15b50565b606060668054610a3590612355565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6190612355565b8015610aae5780601f10610a8357610100808354040283529160200191610aae565b820191906000526020600020905b815481529060010190602001808311610a9157829003601f168201915b5050505050905090565b610aca610ac3610d14565b838361138d565b5050565b610adf610ad9610d14565b83610dd5565b610b1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b159061251c565b60405180910390fd5b610b2a848484846114f9565b50505050565b610b3b838383610e6a565b505050565b6060610b4b82610cc9565b6000610b55611555565b90506000815111610b755760405180602001604052806000815250610ba0565b80610b7f8461156c565b604051602001610b90929190612775565b6040516020818303038152906040525b915050919050565b6000606a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610cd28161163a565b610d11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0890612588565b60405180910390fd5b50565b600033905090565b816069600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d8f83610719565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610de183610719565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610e235750610e228185610ba8565b5b80610e6157508373ffffffffffffffffffffffffffffffffffffffff16610e49846104f3565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e8a82610719565b73ffffffffffffffffffffffffffffffffffffffff1614610ee0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed79061280b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f469061289d565b60405180910390fd5b610f5c838383600161167b565b8273ffffffffffffffffffffffffffffffffffffffff16610f7c82610719565b73ffffffffffffffffffffffffffffffffffffffff1614610fd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc99061280b565b60405180910390fd5b6069600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001606860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461115e83838360016117a1565b505050565b600061116e82610719565b905061117e81600084600161167b565b61118782610719565b90506069600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506067600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112ad8160008460016117a1565b5050565b60006067600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b61132c8282604051806020016040528060008152506117a7565b5050565b600060019054906101000a900460ff1661137f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113769061292f565b60405180910390fd5b6113898282611802565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036113fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f29061299b565b60405180910390fd5b80606a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114ec9190611e20565b60405180910390a3505050565b611504848484610e6a565b61151084848484611875565b61154f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154690612a2d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161157b846119fc565b01905060008167ffffffffffffffff81111561159a57611599612138565b5b6040519080825280601f01601f1916602001820160405280156115cc5781602001600182028036833780820191505090505b509050600082602001820190505b60011561162f578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161162357611622612a4d565b5b049450600085036115da575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661165c836112b1565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561179b57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461170f5780606860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117079190612aab565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461179a5780606860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117929190612adf565b925050819055505b5b50505050565b50505050565b6117b18383611b4f565b6117be6000848484611875565b6117fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f490612a2d565b60405180910390fd5b505050565b600060019054906101000a900460ff16611851576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118489061292f565b60405180910390fd5b81606590816118609190612cb5565b5080606690816118709190612cb5565b505050565b60006118968473ffffffffffffffffffffffffffffffffffffffff16610c3c565b156119ef578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026118bf610d14565b8786866040518563ffffffff1660e01b81526004016118e19493929190612ddc565b6020604051808303816000875af192505050801561191d57506040513d601f19601f8201168201806040525081019061191a9190612e3d565b60015b61199f573d806000811461194d576040519150601f19603f3d011682016040523d82523d6000602084013e611952565b606091505b506000815103611997576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198e90612a2d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119f4565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611a5a577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611a5057611a4f612a4d565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611a97576d04ee2d6d415b85acef81000000008381611a8d57611a8c612a4d565b5b0492506020810190505b662386f26fc100008310611ac657662386f26fc100008381611abc57611abb612a4d565b5b0492506010810190505b6305f5e1008310611aef576305f5e1008381611ae557611ae4612a4d565b5b0492506008810190505b6127108310611b14576127108381611b0a57611b09612a4d565b5b0492506004810190505b60648310611b375760648381611b2d57611b2c612a4d565b5b0492506002810190505b600a8310611b46576001810190505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611bbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bb590612eb6565b60405180910390fd5b611bc78161163a565b15611c07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bfe90612f22565b60405180910390fd5b611c1560008383600161167b565b611c1e8161163a565b15611c5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5590612f22565b60405180910390fd5b6001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611d686000838360016117a1565b5050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611db581611d80565b8114611dc057600080fd5b50565b600081359050611dd281611dac565b92915050565b600060208284031215611dee57611ded611d76565b5b6000611dfc84828501611dc3565b91505092915050565b60008115159050919050565b611e1a81611e05565b82525050565b6000602082019050611e356000830184611e11565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e75578082015181840152602081019050611e5a565b60008484015250505050565b6000601f19601f8301169050919050565b6000611e9d82611e3b565b611ea78185611e46565b9350611eb7818560208601611e57565b611ec081611e81565b840191505092915050565b60006020820190508181036000830152611ee58184611e92565b905092915050565b6000819050919050565b611f0081611eed565b8114611f0b57600080fd5b50565b600081359050611f1d81611ef7565b92915050565b600060208284031215611f3957611f38611d76565b5b6000611f4784828501611f0e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611f7b82611f50565b9050919050565b611f8b81611f70565b82525050565b6000602082019050611fa66000830184611f82565b92915050565b611fb581611f70565b8114611fc057600080fd5b50565b600081359050611fd281611fac565b92915050565b60008060408385031215611fef57611fee611d76565b5b6000611ffd85828601611fc3565b925050602061200e85828601611f0e565b9150509250929050565b60008060006060848603121561203157612030611d76565b5b600061203f86828701611fc3565b935050602061205086828701611fc3565b925050604061206186828701611f0e565b9150509250925092565b60006020828403121561208157612080611d76565b5b600061208f84828501611fc3565b91505092915050565b6120a181611eed565b82525050565b60006020820190506120bc6000830184612098565b92915050565b6120cb81611e05565b81146120d657600080fd5b50565b6000813590506120e8816120c2565b92915050565b6000806040838503121561210557612104611d76565b5b600061211385828601611fc3565b9250506020612124858286016120d9565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61217082611e81565b810181811067ffffffffffffffff8211171561218f5761218e612138565b5b80604052505050565b60006121a2611d6c565b90506121ae8282612167565b919050565b600067ffffffffffffffff8211156121ce576121cd612138565b5b6121d782611e81565b9050602081019050919050565b82818337600083830152505050565b6000612206612201846121b3565b612198565b90508281526020810184848401111561222257612221612133565b5b61222d8482856121e4565b509392505050565b600082601f83011261224a5761224961212e565b5b813561225a8482602086016121f3565b91505092915050565b6000806000806080858703121561227d5761227c611d76565b5b600061228b87828801611fc3565b945050602061229c87828801611fc3565b93505060406122ad87828801611f0e565b925050606085013567ffffffffffffffff8111156122ce576122cd611d7b565b5b6122da87828801612235565b91505092959194509250565b600080604083850312156122fd576122fc611d76565b5b600061230b85828601611fc3565b925050602061231c85828601611fc3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061236d57607f821691505b6020821081036123805761237f612326565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006123e2602183611e46565b91506123ed82612386565b604082019050919050565b60006020820190508181036000830152612411816123d5565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000612474603d83611e46565b915061247f82612418565b604082019050919050565b600060208201905081810360008301526124a381612467565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000612506602d83611e46565b9150612511826124aa565b604082019050919050565b60006020820190508181036000830152612535816124f9565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612572601883611e46565b915061257d8261253c565b602082019050919050565b600060208201905081810360008301526125a181612565565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612604602983611e46565b915061260f826125a8565b604082019050919050565b60006020820190508181036000830152612633816125f7565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000612696602e83611e46565b91506126a18261263a565b604082019050919050565b600060208201905081810360008301526126c581612689565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b60006127086127036126fe846126cc565b6126e3565b6126d6565b9050919050565b612718816126ed565b82525050565b6000602082019050612733600083018461270f565b92915050565b600081905092915050565b600061274f82611e3b565b6127598185612739565b9350612769818560208601611e57565b80840191505092915050565b60006127818285612744565b915061278d8284612744565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006127f5602583611e46565b915061280082612799565b604082019050919050565b60006020820190508181036000830152612824816127e8565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612887602483611e46565b91506128928261282b565b604082019050919050565b600060208201905081810360008301526128b68161287a565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000612919602b83611e46565b9150612924826128bd565b604082019050919050565b600060208201905081810360008301526129488161290c565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612985601983611e46565b91506129908261294f565b602082019050919050565b600060208201905081810360008301526129b481612978565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612a17603283611e46565b9150612a22826129bb565b604082019050919050565b60006020820190508181036000830152612a4681612a0a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612ab682611eed565b9150612ac183611eed565b9250828203905081811115612ad957612ad8612a7c565b5b92915050565b6000612aea82611eed565b9150612af583611eed565b9250828201905080821115612b0d57612b0c612a7c565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612b757fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612b38565b612b7f8683612b38565b95508019841693508086168417925050509392505050565b6000612bb2612bad612ba884611eed565b6126e3565b611eed565b9050919050565b6000819050919050565b612bcc83612b97565b612be0612bd882612bb9565b848454612b45565b825550505050565b600090565b612bf5612be8565b612c00818484612bc3565b505050565b5b81811015612c2457612c19600082612bed565b600181019050612c06565b5050565b601f821115612c6957612c3a81612b13565b612c4384612b28565b81016020851015612c52578190505b612c66612c5e85612b28565b830182612c05565b50505b505050565b600082821c905092915050565b6000612c8c60001984600802612c6e565b1980831691505092915050565b6000612ca58383612c7b565b9150826002028217905092915050565b612cbe82611e3b565b67ffffffffffffffff811115612cd757612cd6612138565b5b612ce18254612355565b612cec828285612c28565b600060209050601f831160018114612d1f5760008415612d0d578287015190505b612d178582612c99565b865550612d7f565b601f198416612d2d86612b13565b60005b82811015612d5557848901518255600182019150602085019450602081019050612d30565b86831015612d725784890151612d6e601f891682612c7b565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b6000612dae82612d87565b612db88185612d92565b9350612dc8818560208601611e57565b612dd181611e81565b840191505092915050565b6000608082019050612df16000830187611f82565b612dfe6020830186611f82565b612e0b6040830185612098565b8181036060830152612e1d8184612da3565b905095945050505050565b600081519050612e3781611dac565b92915050565b600060208284031215612e5357612e52611d76565b5b6000612e6184828501612e28565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612ea0602083611e46565b9150612eab82612e6a565b602082019050919050565b60006020820190508181036000830152612ecf81612e93565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612f0c601c83611e46565b9150612f1782612ed6565b602082019050919050565b60006020820190508181036000830152612f3b81612eff565b905091905056fea2646970667358221220af6562998387242f15e093fef11835d9a067afdcd776981d3a6bb45b9bec317064736f6c63430008110033";

type ERC721KV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ERC721KV2ConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class ERC721KV2__factory extends ContractFactory {
  constructor(...args: ERC721KV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ERC721KV2> {
    return super.deploy(overrides || {}) as Promise<ERC721KV2>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721KV2 {
    return super.attach(address) as ERC721KV2;
  }
  override connect(signer: Signer): ERC721KV2__factory {
    return super.connect(signer) as ERC721KV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721KV2Interface {
    return new utils.Interface(_abi) as ERC721KV2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721KV2 {
    return new Contract(address, _abi, signerOrProvider) as ERC721KV2;
  }
}
