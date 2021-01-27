import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import Dank from '../../assets/img/dankmans.gif';
export default function Home() {
  return (
    <div className={styles.container}>
     <Head>
        <title>ChatWZ — API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        <img src="/chatwz.svg" alt="ChatWZ Logo" className={styles.logo} />
        </h1>
        <h2>Dank API's</h2>
        <img src="https://cdn.betterttv.net/emote/5e3ae53cd736527d5cd26e7b/3x" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/raianwz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/Raianwz.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
