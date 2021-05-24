import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function projects() {
  return (
    <div className={styles.projectsContainer}>
      <h3 className={styles.projects}>Projects:</h3>
      {/* -----------------P1--------------------------- */}
      <button className={styles.projectsButton}>
        <Link href="https://alrighterin27.github.io/">Q-TIP GAME</Link>
      </button>
      <button className={styles.infoButton}>
        <Link href="https://github.com/AlrightErin27/P1-Sleep-Game/blob/main/README.md">
          INFO
        </Link>
      </button>
      {/* -----------------P2--------------------------- */}
      <button className={styles.projectsButton}>
        <Link href="https://gameofthrones-api-project.herokuapp.com/">
          CASTERLY ROCK
        </Link>
      </button>
      <button className={styles.infoButton}>
        <Link href="https://github.com/AlrightErin27/GameOfThronesAPI-P2/blob/main/README.md">
          INFO
        </Link>
      </button>
      {/* -----------------P3--------------------------- */}
      <button className={styles.projectsButton}>
        <Link href="https://6060efd260636ea29c3b76c0--madames-parlor-of-fortune.netlify.app/">
          PARLOR OF FORTUNE
        </Link>
      </button>
      <button className={styles.infoButton}>
        <Link href="https://github.com/AlrightErin27/fortuneteller_client/blob/main/FortuneREADME.md">
          INFO
        </Link>
      </button>
      {/* -----------------P4--------------------------- */}
      {/* <button className={styles.projectsButton}>
        <Link href="https://adventurewanderingsoul.herokuapp.com/">
          ADVENTURE
        </Link>
      </button> */}
      {/* <button className={styles.infoButton}>
        <Link href="https://github.com/AlrightErin27/p4_ChooseYouOwnAdventure/blob/main/README.md">
          INFO
        </Link>
      </button> */}
    </div>
  );
}
