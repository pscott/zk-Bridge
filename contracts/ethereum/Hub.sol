pragma solidity ^0.8.9;

// import 'contracts/ethereum/TestContracts/MockStarknetMessaging.sol';
import 'contracts/ethereum/TestContracts/IStarknetMessaging.sol';
import "@openzeppelin/contracts/access/Ownable.sol";

interface StarkGateInterface {
    function withdraw(
        uint256 amount,
        address recipient
    ) external;
}

// -- Bridge Interfaces --

interface StarkNetBridgeInterface {
    function deposit(uint256 l2Recipient) external payable;
}

interface ZKSyncBridgeInterface {
    function deposit(
        address _l2Receiver,
        address _l1Token,
        uint256 _amount
    ) external payable returns (bytes32 txHash);
}

contract Hub is Ownable {
    address l1TokenETH = address(0);
    // address zkSyncContract = address(0xc24215226336d22238a20A72f8E489c005B44C4A);
    address private constant STARKGATE_BRIDGE = address(0xAEA4513378Eb6023CF9cE730a26255D0e3F075b9);
    address private constant MESSAGING_CONTRACT = address(0xa4eD3aD27c294565cB0DCc993BDdCC75432D498c);
    bytes32 private constant ZKSYNC_HASH = keccak256(abi.encode("ZKSYNC"));
    bytes32 private constant STARKNET_HASH = keccak256(abi.encode("STARKNET"));

    mapping (string => uint256) public routers;
    mapping (string => mapping (uint256 => BridgeOperation)) public operations;
    mapping (string => address) public networkGateways;

    struct BridgeOperation {
        uint256 amount;
        uint256 l2Receiver;
        address l1FailsafeAddress;
        bool pending; // non created operations are false, created but not claimed/executed are true, executed are false
    }

    function setRouter(string calldata name, uint256 addr) public onlyOwner {
        routers[name] = addr;
    }

    function setNetworkGateway(string calldata name, address addr) public onlyOwner {
        networkGateways[name] = addr;
    }

    // Claims ETH from StarkGate
    // TODO: should we just merge this with consumeMessage?
    function claimEth(uint256 amount) public {
        StarkGateInterface starkgate = StarkGateInterface(STARKGATE_BRIDGE);

        starkgate.withdraw(amount, address(this));
    }

    // Consumes the message from the L1 <-> L2  messaging bridge
    function consumeMessage(uint128 amountLow, uint128 amountHigh, uint256 l2Receiver, address l1Failsafe, string calldata network, uint256 nonce) public {
        IStarknetMessaging starknetMessagingContract = IStarknetMessaging(MESSAGING_CONTRACT);

        uint256[] memory payload = new uint256[](5);
        payload[0] = amountLow;
        payload[1] = amountHigh;
        payload[2] = l2Receiver;
        payload[3] = uint256(uint160(l1Failsafe));
        payload[4] = nonce;

        // recompute Amount;
        uint256 amount = (amountHigh << 128) + amountLow;

        starknetMessagingContract.consumeMessageFromL2(routers[network], payload);
        
        operations["STARKNET"][nonce] = BridgeOperation(amount, l2Receiver, l1Failsafe, true);
    }

    function wrappedDeposit(string calldata network, uint256 nonce) private {
        bytes32 hashed = keccak256(abi.encodePacked((network)));
        address gateway = networkGateways[network];
        BridgeOperation memory operation = operations[network][nonce];

        if (hashed == ZKSYNC_HASH) {
            ZKSyncBridgeInterface bridgeContract = ZKSyncBridgeInterface(gateway);

            bridgeContract.deposit{value: operation.amount}(address(uint160(operation.l2Receiver)), address(0), operation.amount);
        } else if (hashed == STARKNET_HASH) {
            StarkNetBridgeInterface bridgeContract = StarkNetBridgeInterface(gateway);

            bridgeContract.deposit{value: operation.amount}(operation.l2Receiver);
        } else {
            revert();
        }
    }

    function deposit(string calldata network, uint256 nonce) public {
        // make sure the bridge operation exists / has not been executed
        require(operations[network][nonce].pending = true);

        // update the accounting
        operations[network][nonce].pending = false;

        // call the `deposit` function on the network's smart contract
        wrappedDeposit(network, nonce); // might be worth it to pass an array to be agnostic on the arguments
    }

    function claimFailsafe(uint256 nonce, string calldata network) public {
        // assert that caller is the failsafe address
        require(msg.sender == operations[network][nonce].l1FailsafeAddress);
        // make sure the bridge operation exists / has not been executed
        require(operations[network][nonce].pending = true);

        // update the accounting
        operations[network][nonce].pending = false;

        // transfer
        address failsafe_address = operations[network][nonce].l1FailsafeAddress;
        payable(failsafe_address).transfer(operations[network][nonce].amount);
    }
}