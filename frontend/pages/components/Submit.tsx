import { useAccount, useStarknetExecute } from '@starknet-react/core'
import { useState, useMemo, useCallback } from 'react'

function Component(getAmount, getZkSyncAddress) {

    const { address, status } = useAccount();

    const calls = [
        {
            contractAddress: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
            entrypoint: 'approve',
            calldata:
                ['0x0197c83b5605d32574286820a41d346dd253b508bf59d36dc72123ec29bea93f',
                    (Number(getAmount) * 1_000_000_000_000_000_000),
                    0],
        },
        {
            contractAddress: '0x0197c83b5605d32574286820a41d346dd253b508bf59d36dc72123ec29bea93f',
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
                <button onClick={execute}>Send {getAmount} ETH to {getZkSyncAddress}</button>
            </p>
        </>
    )
}

export default function Submit({ getAmount, getZkSyncAddress }) {
    return Component(getAmount, getZkSyncAddress)
}