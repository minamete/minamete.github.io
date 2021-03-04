import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import PageContent from '../components/PageContent'
import {useState} from 'react'

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Side Projects</title>
      </Head>

      <main className={styles.main}>
        <Header text="Highly poggers champion: side projects" open={open} setOpen={setOpen}/>
        <PageContent text="I'm working on a few side projects right now, this being one of them. I'll probably put them here later to pad my resume"/>
        </main>

    </div>
  )
}
