import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Skills() {
  return (
    <div>
      <h1>Hello from skills</h1>
      <Image
        src="/icons/axios.png"
        alt="a magical creature"
        height={40}
        width={40}
      />
    </div>
  );
}
