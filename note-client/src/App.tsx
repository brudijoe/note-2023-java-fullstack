import * as React from "react";
import "./App.css";
import {map} from "ramda";
import useNotes, {NoteContext} from "./hooks/useNotes";
import {CreateNote} from "./pages/CreateNote";
import {useState} from "react";

function App() {
  const {notes, loading, error, addNote, deleteNote, editNote} = useNotes();
  const [newNoteText, setNewNoteText] = useState("New Text ok?");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function handleCloseModal() {
    const dialog = document.getElementById("editNoteDialog");
    dialog.close();
  }

  function handleEditNote(id, noteText) {
    const dialog = document.getElementById("editNoteDialog");
    dialog.showModal();
    setNewNoteText(noteText);
  }

  function handleAcceptAndClose(id) {
    editNote(id, newNoteText);
    const dialog = document.getElementById("editNoteDialog");
    dialog.close();
  }

  return (
    <NoteContext.Provider
      value={{notes, loading, error, addNote, deleteNote, editNote}}
    >
      <div>
        <h1>Note</h1>
        <CreateNote/>
        {map((singleNote) => {
          return (
            <div key={singleNote.id}>
              <div>{singleNote.id}</div>
              <div>{singleNote.noteText}</div>
              <button onClick={() => handleEditNote(singleNote.id, singleNote.noteText)}>Edit</button>
              <button onClick={() => deleteNote(singleNote.id)}>Delete</button>
              <dialog id="editNoteDialog">
                <div>Edit Note</div>
                <div>{singleNote.id}</div>
                <textarea
                  rows={4}
                  cols={30}
                  maxLength={1000}
                  value={newNoteText} onChange={(e) => setNewNoteText(e.target.value)}
                />
                <button onClick={handleCloseModal}>Cancel</button>
                <button onClick={() => handleAcceptAndClose(singleNote.id)}>Confirm</button>
              </dialog>
            </div>
          );
        }, notes)}
      </div>
    </NoteContext.Provider>
  );
}

export default App;