import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function projects() {
  return (
    <div className={styles.projectsContainer}>
      <h3 className={styles.projects}>Projects:</h3>
      {/* -----------------P1--------------------------- */}
      <button className={styles.projectsButton}>Q-TIP GAME</button>
      <button className={styles.infoButton}>
        <Link href="https://github.com/AlrightErin27/P1-Sleep-Game/blob/main/README.md">
          INFO
        </Link>
      </button>
      {/* -----------------P2--------------------------- */}
      <button className={styles.projectsButton}>CASTERLY ROCK</button>
      <button className={styles.infoButton}>
        <Link href="https://github.com/AlrightErin27/GameOfThronesAPI-P2/blob/main/README.md">
          INFO
        </Link>
      </button>
      {/* -----------------P3--------------------------- */}
      <button className={styles.projectsButton}>PARLOR OF FORTUNE</button>
      <button className={styles.infoButton}>
        <Link href="https://github.com/AlrightErin27/fortuneteller_client/blob/main/FortuneREADME.md">
          INFO
        </Link>
      </button>
      {/* -----------------P4--------------------------- */}
      <button className={styles.projectsButton}>ADVENTURE</button>
      <button className={styles.infoButton}>
        <Link href="https://github.com/AlrightErin27/p4_ChooseYouOwnAdventure/blob/main/README.md">
          INFO
        </Link>
      </button>
    </div>
  );
}
