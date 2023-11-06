import { useState } from "react";
import styles from "./App.module.css";
import NotesMain from "./components/home/NotesMain";
import Sidebar from "./components/sidebar/Sidebar";
import CreateNoteModal from "./components/modal/CreateNoteModal";
import useNotes from "./hooks/useNotes";
import NotesHomePage from "./components/noteshome/NotesHomePage";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { selected } = useNotes();

  return (
    <div className={styles.app}>
      <Sidebar setModalIsOpen={setModalIsOpen} />
      {selected === "" ? <NotesMain /> : <NotesHomePage />}
      {modalIsOpen && <CreateNoteModal setModalIsOpen={setModalIsOpen} />}
    </div>
  );
}

export default App;
