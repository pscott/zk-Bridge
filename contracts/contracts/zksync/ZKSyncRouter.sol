pragma solidity ^0.8.7;

interface L2BridgeInterface {
    function withdraw(address _l1Receiver, address _l2Token, uint256 _amount) external;
}
interface IL1Messenger {
    
}

contract Router {

    uint256 nonce;
    address hubAddress;
    address zkSyncContract = address(0);

    // https://github.com/matter-labs/v2-testnet-contracts/blob/d4a2869ab6feadb396f357e55aa41d137adc0ab0/l2/contracts/bridge/L2ETHBridge.sol
    function sendEth(address _l1Receiver, address _l2TokenETH, uint256 _amount) private {
        // increment nonce
        nonce += 1;

        // withdraw from L2 to L1
        L2BridgeInterface bridgeContract = L2BridgeInterface(zkSyncContract);
        bridgeContract.withdraw(_l1Receiver, _l2TokenETH, _amount);
    }
    function sendMessage() private {
        // https://github.com/matter-labs/v2-testnet-contracts/blob/8de367778f3b7ed7e47ee8233c46c7fe046a75a3/l2/system-contracts/interfaces/IL1Messenger.sol#L5
        sendToL1()
    }
    function bridgeTo(uint256 amount, address to_address, address l1_failsafe_address) public {

        sendEth(_l1Receiver, _l2TokenETH, amount);
        sendMessage();
    }
}