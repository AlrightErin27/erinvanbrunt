import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function aboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <button>RESUME</button>
      <button>Q-TIP GAME</button>
      <button>CASTERLY ROCK</button>
      <button>PARLOR OF FORTUNE</button>
      <button>CHOOSE YOUR OWN ADVENTURE</button>
    </div>
  );
}
