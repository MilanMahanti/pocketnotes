import { useEffect, useState } from "react";
import NotesContent from "./NotesContent";
import styles from "./NotesHomeBody.module.css";
import NotesInput from "./NotesInput";
import useNotes from "../../hooks/useNotes";

function NotesHomeBody() {
  const { selected } = useNotes();
  const [notesData, setNotesData] = useState(
    JSON.parse(localStorage.getItem(selected)) || []
  );
  useEffect(() => {
    setNotesData(JSON.parse(localStorage.getItem(selected)) || []);
  }, [selected]);
  return (
    <div className={styles.body}>
      <NotesContent notesData={notesData} />
      <NotesInput setNotesData={setNotesData} />
    </div>
  );
}

export default NotesHomeBody;
