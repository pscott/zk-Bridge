pragma solidity ^0.8.7;

// https://github.com/matter-labs/v2-testnet-contracts/blob/d4a2869ab6feadb396f357e55aa41d137adc0ab0/l1/contracts/bridge/interfaces/IL1Bridge.sol
interface L1BridgeInterface {
    function deposit(
        address _l2Receiver,
        address _l1Token,
        uint256 _amount
    ) external payable returns (bytes32 txHash);
}


// manually or cron triggered portaling to zkSync
// 

// call withdraw tx from starknet bridge (funds are now on the hub)

// consume
// account for funds on the contract

// consume message from starknet (calls function here)
// send to zkSync portal to target wallet

contract Hub {
    address l1TokenETH = address(0);
    address zkSyncContract = 0xc24215226336d22238a20A72f8E489c005B44C4A;

    struct BridgeOperation {
        uint256 amount;
        address to_address;
        address l1_failsafe_address;
        bool executed;
    }

    mapping (uint => BridgeOperation[]) Map;
    
    function depositTo_zkSync(address _l2Receiver, uint256 _amount) public {
        L1BridgeInterface bridgeContract = L1BridgeInterface(zkSyncContract);

        // update the accounting
        // call the `deposit` fucntion on the zkSync smart contract
        bridgeContract.deposit(_l2Receiver, l1TokenETH, _amount);
    }

    function claimFailsafe(nonce) public {

    }
}

// ability to withdraw / claim from sender wallet ?

// consumeMessageFromL2()



