%lang starknet

from openzeppelin.token.erc20.IERC20 import IERC20

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.uint256 import Uint256

from starkware.cairo.common.alloc import alloc
from starkware.starknet.common.messages import send_message_to_l1
from starkware.starknet.common.syscalls import get_caller_address

// contrat qui choppe ETH, addr withdraw l1, addr withdraw l2 (peut-etre fee mais on regarde pas)
// forward to l1 l'eth
// forward l1 le message
// done (on pourra faire)

const ETH_CONTRACT = 0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7;

const STARKGATE_BRIDGE = 0xaaa;

@storage_var
func hub_address() -> (address: felt) {
}

@constructor
func constructor{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(
    hub: felt,
) {
    hub_address.write(hub);
    return ();
}

func send_eth{syscall_ptr: felt*, range_check_ptr} (amount: Uint256) {
    let (caller) = get_caller_address();

    IERC20.transferFrom(ETH_CONTRACT, caller, STARKGATE_BRIDGE, amount);   
    return ();
}

func send_message{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(amount: Uint256, to_address: felt, l1_failsafe_address: felt) -> () {
    let (l1_destination_address) = hub_address.read();

    let (message_payload: felt*) = alloc();

    assert message_payload[0] = amount.low;
    assert message_payload[1] = amount.high;
    assert message_payload[2] = to_address;
    assert message_payload[3] = l1_failsafe_address;
    let payload_size = 4;

    // Send message to L1 Contract
    send_message_to_l1(
        to_address=l1_destination_address, payload_size=payload_size, payload=message_payload
    );
    return ();
}

@external
func bridge_to{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(amount: Uint256, to_address: felt, l1_failsafe_address: felt) {
    send_eth(amount);
    send_message(amount, to_address, l1_failsafe_address);
    return ();
}
