import { useAccount, useStarknetExecute } from '@starknet-react/core'

function Component(getAmount: any, getZkSyncAddress: any) {

    const { address } = useAccount();

    const ethContractAddress = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
    const starknetContractAddress = "0x063034ff00945bcfd734e7258d8c3bb6c8696dd90c8e5555a608050ceec1306a";
    const calls = [
        {
            contractAddress: ethContractAddress,
            entrypoint: 'approve',
            calldata:
                [starknetContractAddress,
                    (Number(getAmount) * 1_000_000_000_000_000_000),
                    0],
        },
        {
            contractAddress: starknetContractAddress,
            entrypoint: 'bridge_to',
            calldata:
                [(Number(getAmount) * 1_000_000_000_000_000_000),
                    0,
                    getZkSyncAddress,
                    getZkSyncAddress],
        }]

    const { execute, loading, error } = useStarknetExecute({ calls });

    if (error) {
        return <>
            <div>Error, please retry</div>
        </>
    }
    if (loading) {
        return <>
            <button disabled>Sending {getAmount} ETH to {getZkSyncAddress}</button>
        </>
    }
    if (!address) {
        return (
            <>
                <button disabled>Please connect ArgentX ser</button>
            </>)
    }
    if (!getZkSyncAddress) {
        return (
            <>
                <button disabled>Please connect Metamask ser</button>
            </>)
    }
    if (!getAmount) {
        return (
            <>
                <button disabled>Provide amount ser</button>
            </>)
    }

    return (
        <>
            <p>
                <button onClick={() => execute()}>Send {getAmount} ETH to {getZkSyncAddress}</button>
            </p>
        </>
    )
}

export default function Submit({ getAmount, getZkSyncAddress }: { getAmount: any, getZkSyncAddress: any }) {
    return Component(getAmount, getZkSyncAddress)
}