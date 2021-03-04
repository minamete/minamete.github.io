import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import PageContent from '../components/PageContent'
import {useState} from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Club AMHS</title>
      </Head>

      <main className={styles.main}>
        <Header text="Minamete: Coding Club AMHS" open={open} setOpen={setOpen}/>
        <div className={styles.row}>
          <PageContent color="black" foregroundColor="white">
            <h1>AMHS Coding Club</h1>
          </PageContent>
        </div>
        <div className={styles.row}>
          <PageContent color="white">

          </PageContent>
        </div>
        <div className={styles.row}>
          <PageContent color="cadetblue"> <p>Who am I?</p></PageContent>
          <PageContent color="darkseagreen"><p>Why are we here?</p></PageContent>
        </div>
        <div className={styles.row}>

        </div>
        <div className={open ? styles.dimmer : null}/>
        <footer className={styles.row}>
          <PageContent color="black" foregroundColor="white">
            <p>No copyright here haha (c) 2021 for CAS purposes</p>
          </PageContent>
      </footer>
      </main>


    </div>
  )
}
