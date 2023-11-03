import useNotes from "../hooks/useNotes";
import styles from "./NotesHomeHeader.module.css";
import arrow from "../assets/arrow.svg";
function NotesHomeHeader() {
  const { selected, notes, isMobile, setDisplay } = useNotes();
  const newNote = notes.filter((note) => note.id === selected);
  const handelClick = () => {
    if (isMobile) {
      setDisplay(false);
    }
  };
  return (
    <div className={styles.header}>
      {isMobile && (
        <button className={styles.btn} onClick={() => handelClick()}>
          <img src={arrow} alt="arrow icon" />
        </button>
      )}

      <div
        className={styles.profile}
        style={{ backgroundColor: newNote[0].color }}
      >
        <p>{newNote[0].initials}</p>
      </div>
      <p className={styles.heading}>{newNote[0].name}</p>
    </div>
  );
}

export default NotesHomeHeader;
