import {useState} from 'react'
import './App.css'
import {map} from "ramda"

function App() {
  const [note, setNote] = useState({
    id: 1,
    noteText: "Ich bin eine Notiz"
  })
  const [notes, setNotes] = useState([note, note, note])

  return (
    <>
      <h1>Notes:</h1>
      {map((singleNote) => {
        return (
          <>
            <div>{singleNote.id}</div>
            <div>{singleNote.noteText}</div>
          </>
        )
      }, notes)}
    </>
  )
}

export default App