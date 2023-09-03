import "./App.css";
import {map} from "ramda";
import useNotes, {NoteContext} from "./hooks/useNotes";
import {CreateNote} from "./pages/CreateNote";
import {NoteCard} from "./pages/NoteCard";
import {Header} from "./pages/Header";

function App() {
  const {notes, loading, error, addNote, deleteNote, editNote} = useNotes();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <NoteContext.Provider value={{notes, loading, error, addNote, deleteNote, editNote}}>
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <CreateNote />
        <div className="flex flex-row flex-wrap p-4 gap-4">
          {notes && map((singleNote) => <NoteCard key={singleNote.id} singleNote={singleNote} />, notes)}
        </div>
      </div>
    </NoteContext.Provider>
  );
}

export default App;
