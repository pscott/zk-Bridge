import { useConnectors, useAccount } from '@starknet-react/core'


function buttonString(addr) {
    if (addr) {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    }
    return "Connect ArgentX"
}


export default function ConnectStarkWallet({ setStarkAddress }) {
    const { connect, connectors } = useConnectors()
    const { address } = useAccount()

    return (
        <>
            {connectors.map((connector) => (
                <li key={connector.id()}>
                    <button onClick={() => connect(connector)}>
                        {setStarkAddress(address)}
                        {buttonString(address)}
                    </button>
                </li>
            ))}
        </>
    )
}