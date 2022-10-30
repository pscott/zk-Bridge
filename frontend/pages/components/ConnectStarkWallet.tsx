import { useConnectors, useAccount } from '@starknet-react/core'

function buttonString(addr: any) {
    if (addr) {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    }
    return "Connect ArgentX"
}


export default function ConnectStarkWallet() {
    const { connect, connectors } = useConnectors()
    const { address } = useAccount()

    return (
        <>
            {connectors.map((connector) => (
                <li key={connector.id()}>
                    <button onClick={() => connect(connector)}>
                        {buttonString(address)}
                    </button>
                </li>
            ))}
        </>
    )
}