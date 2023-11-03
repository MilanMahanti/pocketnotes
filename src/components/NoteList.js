import styles from "./NoteList.module.css";
import useNotes from "../hooks/useNotes";
import NotesListItem from "./NotesListItem";
function NoteList() {
  const { notes } = useNotes();
  return (
    <div className={styles.notes}>
      <ul>
        {notes.map((item, index) => (
          <NotesListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
