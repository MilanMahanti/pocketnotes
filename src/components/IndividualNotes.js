import styles from "./IndividualNotes.module.css";
function IndividualNotes({ note }) {
  return (
    <div key={note.time} className={styles.note}>
      <div className={styles.metadata}>
        <p>{note.time}</p>
        <p>{note.date}</p>
      </div>
      <div className={styles.text}>
        <p>{note.text}</p>
      </div>
    </div>
  );
}

export default IndividualNotes;
