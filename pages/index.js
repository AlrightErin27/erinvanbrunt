import Head from "next/head";
import Skills from "../pages/skills";
import AboutMe from "../pages/aboutMe";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
// import Image from "next/image";

export default function Home() {
  // SET STATE //
  const [isActive0, setActive0] = useState("false");
  const [isActive1, setActive1] = useState("false");
  const [isActive2, setActive2] = useState("false");
  const [isActive3, setActive3] = useState("false");
  const [isActive4, setActive4] = useState("false");
  const [isActive5, setActive5] = useState("false");
  const [isActive6, setActive6] = useState("false");
  const [isActive7, setActive7] = useState("false");
  const [isActive8, setActive8] = useState("false");
  const [isActive9, setActive9] = useState("false");
  const [isActive10, setActive10] = useState("false");
  const [isActive11, setActive11] = useState("false");

  const handleGlow0 = () => {
    setActive0(!isActive0);
  };
  const handleGlow1 = () => {
    setActive1(!isActive1);
  };
  const handleGlow2 = () => {
    setActive2(!isActive2);
  };
  const handleGlow3 = () => {
    setActive3(!isActive3);
  };
  const handleGlow4 = () => {
    setActive4(!isActive4);
  };
  const handleGlow5 = () => {
    setActive5(!isActive5);
  };
  const handleGlow6 = () => {
    setActive6(!isActive6);
  };
  const handleGlow7 = () => {
    setActive7(!isActive7);
  };
  const handleGlow8 = () => {
    setActive8(!isActive8);
  };
  const handleGlow9 = () => {
    setActive9(!isActive9);
  };
  const handleGlow10 = () => {
    setActive10(!isActive10);
  };
  const handleGlow11 = () => {
    setActive11(!isActive11);
  };
  // --------------------------------------------------- //
  return (
    <div className={styles.container}>
      <Head>
        <title>EVB Portfolio</title>
        {/* Erin's Blue logo  */}
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>

      <main className={styles.main}>
        {/* ERIN */}
        <div
          className={isActive0 ? styles.letters : styles.glowLetter}
          onMouseOver={handleGlow0}
        >
          E
        </div>
        <div
          className={isActive1 ? styles.letters : styles.glowLetter}
          onMouseOver={handleGlow1}
        >
          R
        </div>
        <div
          className={isActive2 ? styles.letters : styles.glowLetter}
          onMouseOver={handleGlow2}
        >
          I
        </div>
        <div
          className={isActive3 ? styles.letters : styles.glowLetter}
          onMouseOver={handleGlow3}
        >
          N
        </div>
        {/* VAN */}
        <div
          className={isActive4 ? styles.letterSpace : styles.glowLetterSpace}
          onMouseOver={handleGlow4}
        >
          V
        </div>
        <div
          className={isActive5 ? styles.letters : styles.glowLetter}
          onMouseOver={handleGlow5}
        >
          A
        </div>
        <div
          className={isActive6 ? styles.letters : styles.glowLetter}
          onMouseOver={handleGlow6}
        >
          N
        </div>
        {/* BRUNT */}
        <div
          className={isActive7 ? styles.letterSpace : styles.glowLetterSpace}
          onMouseOver={handleGlow7}
        >
          B
        </div>
        <div
          className={isActive8 ? styles.letters : styles.glowLetter}
          onMouseOver={handleGlow8}
        >
          R
        </div>
        <div
          className={isActive9 ? styles.letters : styles.glowLetter}
          onMouseOver={handleGlow9}
        >
          U
        </div>
        <div
          className={isActive10 ? styles.letters : styles.glowLetter}
          onMouseOver={handleGlow10}
        >
          N
        </div>
        <div
          className={isActive11 ? styles.letters : styles.glowLetter}
          onMouseOver={handleGlow11}
        >
          T
        </div>

        {/*-------------------- JOB TITLE --------------------*/}
        <div className={styles.jobTitleContainer}>
          <h2 className={styles.jobTitle}>Front-end Software Engineer</h2>
        </div>
      </main>
      <Skills />
      <AboutMe />
    </div>
  );
}
