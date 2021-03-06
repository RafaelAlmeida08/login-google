import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import router from 'next/router';

export default function Home(id) {

  useEffect(()=>{
    router.push(`/dashboard/${id.id}`)
  })
    

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    </div>
  )
}
