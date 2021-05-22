import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function projects() {
  return (
    <div className={styles.projectsContainer}>
      <h3 className={styles.projects}>Projects:</h3>

      <button className={styles.projectsButton}>Q-TIP GAME</button>
      <button className={styles.infoButton}>INFO</button>
      <button className={styles.projectsButton}>CASTERLY ROCK</button>
      <button className={styles.infoButton}>INFO</button>
      <button className={styles.projectsButton}>PARLOR OF FORTUNE</button>
      <button className={styles.infoButton}>INFO</button>
      <button className={styles.projectsButton}>ADVENTURE</button>
      <button className={styles.infoButton}>INFO</button>
    </div>
  );
}
