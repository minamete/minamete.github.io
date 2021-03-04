import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import PageContent from '../components/PageContent'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
      </Head>

      <main className={styles.main}>
        <Header text="Highly poggers champion: Contact Info"></Header>
        <h1>Social Media</h1>
        <table class="contactmetable">
                <tr>
                    <th>Discord: </th>
                    <td>crystal ball colon#3732</td>
                </tr>
                <tr>
                    <th>Instagram:</th>
                    <td>laura.c.38</td>
                </tr>
            </table>
        </main>

    </div>
  )
}
