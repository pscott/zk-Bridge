function buttonString(addr) {
    if (addr) {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    }
    return "Connect Metamask    "
}

const test = async (setZkSyncAddress) => {
    // Check if MetaMask is installed on user's browser
    if (!window.ethereum) {
        alert("Please install Metamask");
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    // Check if user is connected to Mainnet
    if (chainId != '0x118') {
        alert("Plz switch to zkSync testnet (280)");
    } else {
        let wallet = accounts[0];
        setZkSyncAddress(wallet)
    }

}
export default function ConnectZkSyncWallet({ getZkSyncAddress, setZkSyncAddress }) {
    return (
        <>
            <li>
                <button onClick={async () => test(setZkSyncAddress)}>
                    {buttonString(getZkSyncAddress)}</button>
            </li>
        </>
    );
}