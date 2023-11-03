import useNotes from "../hooks/useNotes";
import styles from "./NotesListItem.module.css";
function NotesListItem({ item }) {
  const { selected, setSelected, isMobile, setDisplay } = useNotes();
  const handelClick = (e) => {
    setSelected(item.id);
    if (isMobile) {
      setDisplay(true);
    }
  };
  return (
    <li
      className={`${styles.note} ${
        selected === item.id ? styles.selected : ""
      }`}
      onClick={(e) => handelClick(e)}
    >
      <div style={{ backgroundColor: item.color }} className={styles.circle}>
        <p>{item.initials}</p>
      </div>
      <p className={styles.name}>{item.name}</p>
    </li>
  );
}

export default NotesListItem;
