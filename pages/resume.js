import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function resume() {
  return (
    <div className={styles.resumeContainer}>
      <button className={styles.resumeButton}>RESUME</button>
    </div>
  );
}
