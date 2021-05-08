import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  // SET STATE //
  const [isActive, setActive] = useState("false");

  const handleGlow = () => {
    setActive(!isActive);
  };
  // --------------------------------------------------- //
  return (
    <div className={styles.container}>
      <Head>
        <title>EVB Portfolio</title>
        {/* Erin's Blue logo  */}
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div
          className={isActive ? styles.allLetters : styles.letter0}
          onMouseOver={handleGlow}
        >
          E
        </div>

        {/* <div className={styles.letter1}>R</div>
        <div className={styles.letter2}>I</div>
        <div className={styles.letter3}>N</div> */}
      </main>
    </div>
  );
}
