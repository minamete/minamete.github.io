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
        <title>Home</title>
      </Head>

      <main className={styles.main}>
        <Header text="Minamete: home" open={open} setOpen={setOpen}/>
        <div className={styles.row}>
          <PageContent color="black" foregroundColor="white">
            <h1>minamete.github.io</h1>
          </PageContent>
        </div>
        <div className={styles.row}>
          <PageContent color="white">
            <p>Hey guys, welcome to my website! I'm Laura, a high school student and aspiring programmer at Alexander Mackenzie High School. I'm one of the presidents of the AMHS coding club, and you can check it out in the sidebar menu. I have a passion for mathematics, music, art, and technology, and if you explore this website, you will hopefully see the extent of these passions.</p>
            <p>I'm pretty active on social media, but I'm the most active on Discord, so please contact me there if you have any concerns! Of course, there'll be a form on this website, too, but I'll respond faster on Discord.</p>
            <p>What do you even put on the homepage of your website? I honestly don't know. All of this text is bullshit, none of this is gonna make it to the actual website. I don't even know how to host this, I'm too broke to pay for actual hosting.</p>
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
