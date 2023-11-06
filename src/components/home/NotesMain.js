import styles from "./NotesMain.module.css";
import bgimg from "../../assets/image-removebg-preview 1.png";
import lock from "../../assets/lock-icon.svg";
function NotesMain() {
  return (
    <div className={styles.main}>
      <img src={bgimg} alt="background img" className={styles.bgimg} />
      <p className={styles.title}>Pocket Notes</p>
      <p className={styles.des}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className={styles.bottom}>
        <img src={lock} alt="lock-icon" className={styles.lock} />
        <p className={styles["bottom-text"]}>end-to-end encrypted</p>
      </div>
    </div>
  );
}

export default NotesMain;
