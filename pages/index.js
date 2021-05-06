import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EVB Portfolio</title>
        {/* Erin's Blue logo  */}
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Erin
          <br />
          Van
          <br />
          Brunt
        </h1>
        <h3 className={styles.subTitle}>Front-end Software Engineer</h3>
      </main>
    </div>
  );
}
