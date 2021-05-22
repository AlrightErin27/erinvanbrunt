import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contactContainer}>
        <button className={styles.contactButton}>
          <Link href="https://www.linkedin.com/in/erin-van-brunt/">
            Linked In
          </Link>
        </button>

        <button className={styles.contactButton}>
          <Link href="https://generalassemb.ly/education/software-engineering-immersive/seattle">
            General Assembly
          </Link>
        </button>

        <button className={styles.contactButton}>
          <Link href="mailto:erinmontybruce@gmail.com">
            erinmontybruce@gmail.com
          </Link>
        </button>
      </div>
    </div>
  );
}
