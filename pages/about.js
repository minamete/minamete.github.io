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
        <title>About Me</title>
      </Head>

      <main className={styles.main}>
        <Header text="Minamete: about me" open={open} setOpen={setOpen}/>
        <div className={styles.row}>
          <PageContent color="black" foregroundColor="white">
            <h1>About Me</h1>
          </PageContent>
        </div>
        <div className={styles.row}>
          <PageContent color="white">
            <p>I am constantly dying on the inside, someone help me. I need to fill up this space so that my website looks better. This is all just bs filler text. I really do hope I remember to change this later. Please someone help me, I need a therapist. I am stuck in programming hell.</p>
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
