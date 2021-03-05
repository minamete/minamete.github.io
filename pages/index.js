import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import PageContent from '../components/PageContent'
import Button from '../components/Button'
import {useState} from 'react';

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <meta name="google-site-verification" content="RXHzVUH7lISEutInvcuIAbF7xI9HFS_ANP5jsQmgFHY" />
        <title>Home</title>
      </Head>

      <main className={styles.main}>
        <Header text="Minamete: home" open={open} setOpen={setOpen}/>
        <div className={styles.row}>
          <PageContent color="black" foregroundColor="white">
            <h1>Minamete</h1>
          </PageContent>
        </div>
        <div className={styles.row}>
          <PageContent color="white">
            <p>Hey guys, welcome to my website! I'm Laura, a high school student at Alexander Mackenzie High School. I'm one of the presidents of the AMHS coding club, and you can check it out in the sidebar menu. I have a passion for mathematics, music, art, and technology, and if you explore this website, you will hopefully see the extent of these passions.</p>
            <p>I'm pretty active on social media, but I'm the most active on Discord, so please contact me there if you have any concerns! Of course, there'll be a form on this website, too, but I'll respond faster on Discord.</p>
            <p>Instead of using a static webpage generator like a normal person would, I decided to make all of this from scratch (if you don't count importing libraries) using React. If you want to make the same bad decisions as I did, read up on next.js and React!</p>
          </PageContent>
        </div>
        <div className={styles.row}>
          <Button color="darkseagreen" text="View my source code!" link="https://github.com/minamete/minamete"/>
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

export default Home;