import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import PageContent from '../components/PageContent'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coding Club AMHS</title>
      </Head>

      <main className={styles.main}>
        <Header text="Highly poggers champion: Coding Club AMHS"></Header>
        <PageContent text="Coding club is pretty cool, you should probably join it"/>
        </main>

    </div>
  )
}
