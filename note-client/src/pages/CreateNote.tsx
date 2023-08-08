import * as React from "react";
import { useState, useContext } from "react";
import { NoteContext } from "../hooks/useNotes";

export function CreateNote() {
  const { addNote } = useContext(NoteContext);
  const [newNoteText, setNewNoteText] = useState("");

  const handleAddNote: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (newNoteText.trim() !== "") {
      addNote({
        noteText: newNoteText,
      });
      setNewNoteText("");
    }
  };

  return (
    <form onSubmit={handleAddNote}>
      <input
        type="text"
        value={newNoteText}
        onChange={(event) => setNewNoteText(event.target.value)}
        placeholder="Enter a new note"
      />
      <button type="submit">Add Note</button>
    </form>
  );
}