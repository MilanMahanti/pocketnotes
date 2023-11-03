import useNotes from "../hooks/useNotes";
import NotesHomeBody from "./NotesHomeBody";
import NotesHomeHeader from "./NotesHomeHeader";
import styles from "./NotesHomePage.module.css";
function NotesHomePage() {
  const { display, isMobile } = useNotes();
  return (
    <div
      className={`${styles.home} ${!display && isMobile ? styles.none : ""}`}
    >
      <NotesHomeHeader />
      <NotesHomeBody />
    </div>
  );
}

export default NotesHomePage;
