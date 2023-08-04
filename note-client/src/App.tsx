import './App.css'
import {map} from "ramda"
import useNotes from "./hooks/useNotes";

function App() {
  const { notes } = useNotes();

  return (
    <>
      <h1>Notes:</h1>
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