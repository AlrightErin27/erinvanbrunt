import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function aboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.meContainer}>
        <Image
          className={styles.me}
          src="/me.png"
          alt="Erin"
          layout="responsive"
          width={1}
          height={1}
        />
      </div>
    </div>
  );
}
