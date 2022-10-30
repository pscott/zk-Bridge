import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ConnectStarkWallet from './components/ConnectStarkWallet'
import ConnectZkSyncWallet from './components/ConnectZkSyncWallet'
import Submit from './components/Submit'
import { useState } from "react";

export default function Home() {
  const [getStarkAddress, setStarkAddress] = useState('')
  const [getZkSyncAddress, setZkSyncAddress] = useState('')
  const [toZkSync, toggleToZkSync] = useState(true)
  const [getAmount, setAmount] = useState('')

  return (
    <div className={styles.container}>
      <Head>
        <title>zkBridge</title>
        <meta name="description" content="Bridge from L2 to L2" />
        <link rel="icon" href="fv.png" />
      </Head>
      <nav className={styles.nav}>
        <ul>
          <li><img src="logo.png" alt="Logo" /></li>
          <span>
            <ConnectStarkWallet setStarkAddress={setStarkAddress} />
            <ConnectZkSyncWallet getZkSyncAddress={getZkSyncAddress} setZkSyncAddress={setZkSyncAddress} />
          </span>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.underline}>zkBridge!</span>
          </h1>
          <div className={styles.skalala}>
            From
            <br />
            <p>{getStarkAddress}</p>
            <div className={styles.centered}>
              <div className={styles.round}>
                <img className={styles.troll} src="switch.png" alt="switch" />
              </div>
            </div>
            <br />
            To
            <br />
            <input type="text" value={getZkSyncAddress}
              placeholder="To..." />
          </div>
          <div className={styles.skalala}>
            Amount
            <input type="number" placeholder="0.00" onChange={event => setAmount(event.target.value)} />
          </div>
          <Submit getAmount={getAmount} getZkSyncAddress={getZkSyncAddress} />
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by coffee and candies
      </footer>
    </div >
  )
}
