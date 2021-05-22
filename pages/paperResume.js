import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function paperResume() {
  return (
    <div>
      <Image
        className={styles.paperResume}
        src="/ResumePort1.jpg"
        alt="resume1"
        height={1150}
        width={950}
      />
      <Image
        className={styles.paperResume}
        src="/ResumePort2.jpg"
        alt="resume2"
        height={1150}
        width={950}
      />
    </div>
  );
}
