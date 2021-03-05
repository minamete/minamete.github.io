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
                <p>This very cool terribly coded JavaScript-based web application generates a possibly NSFW quote to cheer you up, using my wonderful JSON-based database and totally not stolen from anyone. Don't look at the link, please. It's not suspicious at all.</p>
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
        <div className={open ? styles.dimmer : null}/>

      </main>

    </div>
  )
}
