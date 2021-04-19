import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import PageContent from '../../components/PageContent'
import { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Side Projects</title>
        <meta name="google-site-verification" content="sSmNl0f89iLRc_nCuN7VELTmE1TkwxzcY80buj9U2p4" />
      </Head>

      <main className={styles.main}>
        <Header text="Highly poggers champion: side projects" open={open} setOpen={setOpen} />
        <div className={styles.row}>
          <PageContent color="black" foregroundColor="white">
            <h1>Programming projects</h1>
          </PageContent>
        </div>
        <div className={styles.colrow}>
          <PageContent color="cadetblue">
            <a href="/side-projects/brian-shi-sim/">Notable quote generator</a>
          </PageContent>
          <PageContent color="white">
            <p>This very cool JavaScript-based web application generates a possibly NSFW quote to cheer you up, using my wonderful JSON-based ''database'' and totally not based off of any real people. Don't look at the URL, please. It's not suspicious at all.</p>
          </PageContent>
        </div>
        <div className={styles.colrow}>
          <PageContent color="cadetblue">
            <a href="/side-projects/i-know-where-you-live/">How far am I from Ohio right now?</a>
          </PageContent>
          <PageContent color="white">
            <p>Are you safe from the wrath of Ohio?</p>
          </PageContent>
        </div>
        <div className={styles.colrow}>
          <PageContent color="cadetblue">
            <a href="/side-projects/value-accumulator/">Value accumulator</a>
          </PageContent>
          <PageContent color="white">
            <p>WIP: accumulating value.</p>
          </PageContent>
        </div>
        <div className={styles.row}>
          <PageContent color="black" foregroundColor="white">
            <h1>Art projects</h1>
          </PageContent>
        </div>
        <div className={styles.row}>
          <PageContent color="black" foregroundColor="white">
            <h1>Music projects</h1>
          </PageContent>
        </div>
        <div className={open ? styles.dimmer : null} />

      </main>

    </div>
  )
}
