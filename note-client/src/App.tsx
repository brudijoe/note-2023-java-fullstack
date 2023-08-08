import * as React from "react";
import "./App.css";
import { map } from "ramda";
import useNotes, { NoteContext } from "./hooks/useNotes";
import { CreateNote } from "./pages/CreateNote";

function App() {
  const { notes, addNote, loading, error } = useNotes();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, loading, error }}>
      <div>
        <h1>Notes:</h1>
        <CreateNote />
        {map((singleNote) => {
          return (
            <div key={singleNote.id}>
              <div>{singleNote.id}</div>
              <div>{singleNote.noteText}</div>
            </div>
          );
        }, notes)}
      </div>
    </NoteContext.Provider>
  );
}

export default App;