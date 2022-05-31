import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App Home</title>
        <meta name="description" content="News App By Moh Adi Pramudiono" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Halaman Utama</h1>

      <ul className={styles.menu}>
        <li><Link href={`/about`}>About</Link></li>
        <li><Link href={`/newsList`}>News</Link></li>
      </ul>

    </div>
  )
}
