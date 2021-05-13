import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Skills() {
  return (
    <div>
      <div className={styles.iconContainer}>
        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/api.png"
            alt="api"
            height={50}
            width={50}
          />
          <span>API</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/axios.png"
            alt="axios"
            height={50}
            width={50}
          />
          <span>AXIOS</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/bootstrap.png"
            alt="bootstrap"
            height={50}
            width={50}
          />
          <span>BOOTSTRAP</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/canvas.png"
            alt="canvas"
            height={50}
            width={50}
          />
          <span>CANVAS</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/css.png"
            alt="css"
            height={50}
            width={50}
          />
          <span>CSS</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/fetch.png"
            alt="fetch"
            height={50}
            width={50}
          />
          <span>FETCH</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/github.png"
            alt="github"
            height={50}
            width={50}
          />
          <span>GITHUB</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/heroku.png"
            alt="heroku"
            height={50}
            width={50}
          />
          <span>HEROKU</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/html.png"
            alt="html"
            height={50}
            width={50}
          />
          <span>HTML</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/jquery.png"
            alt="jquery"
            height={50}
            width={50}
          />
          <span>JQUERY</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/JS.png"
            alt="JS"
            height={50}
            width={50}
          />
          <span>JAVA SCRIPT</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/json.png"
            alt="json"
            height={50}
            width={50}
          />
          <span>JSON</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/mernAuth.png"
            alt="mernAuth"
            height={50}
            width={50}
          />
          <span>MERN AUTH</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/mongodb.png"
            alt="mongodb"
            height={50}
            width={50}
          />
          <span>MONGO</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/nodejs.png"
            alt="nodejs"
            height={50}
            width={50}
          />
          <span>NODE JS</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/python.png"
            alt="python"
            height={50}
            width={50}
          />
          <span>PYTHON</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/reactnative.png"
            alt="reactnative"
            height={50}
            width={50}
          />
          <span>REACT</span>
        </div>

        <div className={styles.singleIconContainer}>
          <Image
            className={styles.icon}
            src="/icons/sqlPOSTGRES.png"
            alt="sqlPOSTGRES"
            height={50}
            width={50}
          />
          <span>SQL</span>
        </div>
      </div>
    </div>
  );
}
