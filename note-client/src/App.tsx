import React from "react";
import "./App.css";
import {map} from "ramda";
import useNotes, {NoteContext} from "./hooks/useNotes";
import {CreateNote} from "./pages/CreateNote";
import {useState} from "react";
import {NoteCard} from "./pages/NoteCard";

function App() {
  const {notes, loading, error, addNote, deleteNote, editNote} = useNotes();
  const [newNoteText, setNewNoteText] = useState("");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function handleCloseModal(id) {
    const dialog = document.getElementById(`editNoteDialog-${id}`);
    dialog.close();
  }

  function handleEditNote(id, noteText) {
    const dialog = document.getElementById(`editNoteDialog-${id}`);
    dialog.showModal();
    setNewNoteText(noteText);
  }

  function handleConfirm(id) {
    editNote(id, newNoteText);
    const dialog = document.getElementById(`editNoteDialog-${id}`);
    dialog.close();
  }

  return (
    <NoteContext.Provider value={{notes, loading, error, addNote, deleteNote, editNote}}>
      <div className="flex flex-col h-screen">
        <h1>Note</h1>
        <CreateNote/>
        <div className="p-4 grid grid-cols-4 gap-4">
          {map((singleNote) => (
            <NoteCard
              key={singleNote.id}
              singleNote={singleNote}
              handleEditNote={handleEditNote}
              deleteNote={deleteNote}
              newNoteText={newNoteText}
              setNewNoteText={setNewNoteText}
              handleCloseModal={handleCloseModal}
              handleConfirm={handleConfirm}
            />
          ), notes)}
        </div>
      </div>
    </NoteContext.Provider>
  );
}

export default App;