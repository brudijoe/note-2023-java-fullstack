import * as React from "react";
import "./App.css";
import {map} from "ramda";
import useNotes, {NoteContext} from "./hooks/useNotes";
import {CreateNote} from "./pages/CreateNote";
import {useState} from "react";

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
    console.log({id})
    const dialog = document.getElementById(`editNoteDialog-${id}`);
    dialog.showModal();
    setNewNoteText(noteText);
  }

  function handleConfirm(id) {
    console.log({id})
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
          {map((singleNote) => {
            return (
              <div className="shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] w-60 p-2.5 rounded" key={singleNote.id}>
                <div>{singleNote.id}</div>
                <div>{singleNote.noteText}</div>
                <div className="flex flex-row p-4 justify-between">
                  <button className="p-2 w-20" onClick={() => handleEditNote(singleNote.id, singleNote.noteText)}>Edit</button>
                  <button className="p-2 w-20" onClick={() => deleteNote(singleNote.id)}>Delete</button>
                </div>
                <dialog className="p-4 rounded" id={`editNoteDialog-${singleNote.id}`}>
                  <div className="flex flex-col">
                    <div>Edit Note</div>
                    <textarea
                      rows={4}
                      cols={30}
                      maxLength={1000}
                      value={newNoteText} onChange={(event) => setNewNoteText(event.target.value)}
                    />
                    <div className="flex flex-row p-4 justify-between">
                      <button className="p-2 w-20" onClick={() => handleCloseModal(singleNote.id)}>Cancel</button>
                      <button className="p-2 w-20" type="submit" onClick={() => handleConfirm(singleNote.id)}>Confirm</button>
                    </div>
                  </div>
                </dialog>
              </div>
            );
          }, notes)}
        </div>
      </div>
    </NoteContext.Provider>
  );
}

export default App;