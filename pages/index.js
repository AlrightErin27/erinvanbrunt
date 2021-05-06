import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Erin Van Brunt's Portfolio</title>
        {/* Erin's Blue logo  */}
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>💮 EVB 💮</h1>

        <div className={styles.grid}>
          <h3>This is where a grid goes?</h3>
        </div>
      </main>
    </div>
  );
}
