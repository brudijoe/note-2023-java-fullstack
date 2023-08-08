import React, { useState } from "react";
import "./App.css";
import { map } from "ramda";
import useNotes from "./hooks/useNotes";

function App() {
  const { notes, addNote, loading, error } = useNotes();
  const [newNoteText, setNewNoteText] = useState("");

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNoteText.trim() !== "") {
      addNote({
        noteText: newNoteText,
      });
      setNewNoteText("");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Notes:</h1>
      <form onSubmit={handleAddNote}>
        <input
          type="text"
          value={newNoteText}
          onChange={(e) => setNewNoteText(e.target.value)}
          placeholder="Enter a new note"
        />
        <button type="submit">Add Note</button>
      </form>
      {map((singleNote) => {
        return (
          <div key={singleNote.id}>
            <div>{singleNote.id}</div>
            <div>{singleNote.noteText}</div>
          </div>
        );
      }, notes)}
    </>
  );
}

export default App;