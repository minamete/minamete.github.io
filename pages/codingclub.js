import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import PageContent from '../components/PageContent'
import Button from '../components/Button'
import {useState} from 'react';

const CodingClub = () => {
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
          <PageContent color="cadetblue" foregroundColor="white">
            <h2>What are we?</h2>
          </PageContent>
        </div>
        <div className={styles.row}>
          <PageContent color="white">
            <p>Coding club is a club at Alexander Mackenzie High School, aimed at creating a community for students that want to go into computer-related fields. Right now, we're aiming to create a website and an app for our school. If you're interested in learning how to code, or if you're already an experienced programmer, you should consider joining us!</p>
          </PageContent>
        </div>
        <div className={styles.row}>
          <PageContent color="cadetblue" foregroundColor="white">
            <h2>Useful links</h2>
          </PageContent>
        </div>
        <div className={styles.row}>
          <Button color="darkseagreen" text="Coding Club Discord" link="https://discord.gg/bAeK5aBTAr"/>
          <Button color="darkseagreen" text="Coding Club Instagram" link="https://www.instagram.com/coding_club_amhs/"/>
        </div>
        <div className={styles.row}>
          <Button color="darkseagreen" text="Coding Club Google Classroom" link="https://classroom.google.com/c/MjE3MjE0MjgyMDc4?cjc=ieqmyxg"/>
          <Button color="darkseagreen" text="Coding Club Github organization" link="https://github.com/Coding-Club-AMHS/"/>
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
export default CodingClub;