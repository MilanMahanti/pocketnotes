import styles from "./NotesInput.module.css";
import send from "../assets/send-icon.png";
import { useState } from "react";
import useNotes from "../hooks/useNotes";
function NotesInput({ setNotesData }) {
  const { selected } = useNotes();
  const [notesText, setNotesText] = useState("");

  const handelSaveNotes = (e) => {
    const note = JSON.parse(localStorage.getItem(selected)) || [];
    const data = {
      text: notesText,
      date: new Date().toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    note.push(data);
    localStorage.setItem(selected, JSON.stringify(note));
    setNotesText("");
    setNotesData(note);
  };
  const handelEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handelSaveNotes();
    }
  };
  const handelChange = (e) => {
    setNotesText(e.target.value);
  };
  return (
    <div className={styles.input}>
      <div className={styles.form}>
        <label htmlFor="text" hidden>
          Textarea
        </label>
        {/* <inpu
          type="textarea"
          id="text"
          placeholder="Enter Your Text Here..."
          required
        /> */}
        <textarea
          required
          id="text"
          placeholder="Enter Your Text Here..."
          autoFocus
          value={notesText}
          onChange={(e) => handelChange(e)}
          onKeyDown={(e) => handelEnterKey(e)}
        ></textarea>
        <button className={styles.btn} onClick={() => handelSaveNotes()}>
          <img src={send} alt="send icon" />
        </button>
      </div>
    </div>
  );
}

export default NotesInput;
