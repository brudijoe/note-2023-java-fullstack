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
    const dialog = document.getElementById("addNoteDialog");
    dialog.close();
  };

  function handleCloseModal() {
    const dialog = document.getElementById("addNoteDialog");
    dialog.close();
  }

  function handleOpenNewNote() {
    const dialog = document.getElementById("addNoteDialog");
    dialog.showModal();
  }

  return (
    <div className="p-4">
      <button className="p-2 w-20" onClick={handleOpenNewNote}>New</button>
      <dialog className="p-4 rounded" id="addNoteDialog">
        <form className="flex flex-col" onSubmit={handleAddNote}>
          <div>New Note</div>
          <textarea
            rows={4}
            cols={30}
            maxLength={200}
            value={newNoteText}
            onChange={(event) => setNewNoteText(event.target.value)}
            placeholder={"Enter text here..."}
          />
          <div className="flex flex-row p-4 justify-between">
            <button className="p-2 w-20" onClick={handleCloseModal}>Cancel</button>
            <button className="p-2 w-20" type="submit">Confirm</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}