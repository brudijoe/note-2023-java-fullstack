import useNotes, {NoteContext} from "./hooks/useNotes";
import {CreateNote} from "./pages/CreateNote";
import {Header} from "./pages/Header";
import {Title} from "./components/Title";
import {NoteList} from "./pages/Note/NoteList";

function App() {
  const {notes, loading, error, addNote, deleteNote, editNote} = useNotes();

  return (
    <NoteContext.Provider value={{notes, loading, error, addNote, deleteNote, editNote}}>
      <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900">
        <Header />
        {loading ? (
          <div className="py-2 text-black dark:text-white font-bold">Loading...</div>
        ) : error ? (
          <Title title={error} />
        ) : (
          notes && (
            <>
              <CreateNote />
              <NoteList notes={notes} />
            </>
          )
        )}
      </div>
    </NoteContext.Provider>
  );
}

export default App;
