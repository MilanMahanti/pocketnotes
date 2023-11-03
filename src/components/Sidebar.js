import NoteList from "./NoteList";
import styles from "./Sidebar.module.css";
import useNotes from "../hooks/useNotes";
function Sidebar({ setModalIsOpen }) {
  const { display } = useNotes();
  function handelClick(e) {
    setModalIsOpen(true);
  }
  return (
    <div className={`${styles.sidebar} ${display ? "none" : ""}`}>
      <p className={styles.heading}>Pocket Notes</p>
      <div className={styles.list}>
        <button className={styles.btn} onClick={(e) => handelClick(e)}>
          <span className={styles.plus}>+</span> Create Notes group
        </button>
      </div>
      <div className={styles.scroll}>
        <NoteList />
      </div>
    </div>
  );
}

export default Sidebar;
