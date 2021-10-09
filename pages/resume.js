import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function resume() {
  return (
    <div className={styles.resumeContainer}>
      <button className={styles.resumeButton}>
        <Link
          href="https://esume-huetzr86o-alrighterin27.vercel.app"
          rel="resume"
        >
          RESUME
        </Link>
      </button>
    </div>
  );
}
