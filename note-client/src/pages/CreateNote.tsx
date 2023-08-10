import * as React from "react";
import {useState, useContext} from "react";
import {NoteContext} from "../hooks/useNotes";

export function CreateNote() {
  const {addNote} = useContext(NoteContext);
  const [newNoteText, setNewNoteText] = useState("");

  const handleAddNote: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (newNoteText.trim() !== "") {
      addNote({
        noteText: newNoteText,
      });
      setNewNoteText("");
    }
    const dialog = document.querySelector("dialog")
    dialog.close();
  };

  function handleCloseModal() {
    const dialog = document.querySelector("dialog")
    dialog.close();
  }

  function handleOpenNewNote() {
    const dialog = document.querySelector("dialog")
    dialog.showModal();
  }

  return (
    <>
      <button onClick={handleOpenNewNote}>New Note</button>
      <dialog>
        <form onSubmit={handleAddNote}>
          <div>New Note</div>
          <textarea
            rows={4}
            cols={30}
            maxLength={1000}
            value={newNoteText}
            onChange={(event) => setNewNoteText(event.target.value)}
            placeholder={"Enter text here..."}
          />
          <button onClick={handleCloseModal}>Cancel</button>
          <button type="submit">Add Note</button>
        </form>
      </dialog>
    </>
  );
}