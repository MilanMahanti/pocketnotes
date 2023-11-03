import { useEffect, useRef } from "react";
import styles from "./NotesContent.module.css";
import IndividualNotes from "./IndividualNotes";
function NotesContent({ notesData }) {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [notesData]);

  return (
    <div className={styles.content}>
      {notesData.length > 0 ? (
        notesData.map((note, idx) => <IndividualNotes note={note} key={idx} />)
      ) : (
        <p className={styles.placeholder}>Start adding your notes today 📝</p>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default NotesContent;
