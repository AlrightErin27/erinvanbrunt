import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contactContainer}>
        <button className={styles.contactButton}>Linked In</button>
        <button className={styles.contactButton}>Email</button>
        <button className={styles.contactButton}>General Assembly</button>
      </div>
    </div>
  );
}
