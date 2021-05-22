import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function resume() {
  return (
    <div className={styles.resumeContainer}>
      <button className={styles.resumeButton}>
        <Link href="/paperResume" rel="resume" className={styles.resumeLink}>
          RESUME
        </Link>
      </button>
    </div>
  );
}
