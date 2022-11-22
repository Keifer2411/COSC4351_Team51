import Head from 'next/head';
import { Homepage } from '../components/Homepage';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaunt Name</title>
        <meta name="description" content="restaurant description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </div>
  );
}
