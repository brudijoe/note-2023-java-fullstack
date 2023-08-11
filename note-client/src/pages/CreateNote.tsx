import * as React from "react";
import {useState, useContext} from "react";
import {NoteContext} from "../hooks/useNotes";
import Button from "../components/Button";

export function CreateNote() {
  const {addNote} = useContext(NoteContext);
  const [newNoteText, setNewNoteText] = useState("");

  const handleAddNote: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (newNoteText.trim() !== "") {
      addNote({
        noteText: newNoteText,
      });
      setNewNoteText("");
    }
    const dialog = document.getElementById("addNoteDialog");
    dialog.close();
  };

  function handleCloseModal() {
    const dialog = document.getElementById("addNoteDialog");
    dialog.close();
  }

  function handleOpenNewNote() {
    const dialog = document.getElementById("addNoteDialog");
    dialog.showModal();
  }

  return (
    <div className="p-4">
      <Button
        borderColor="border-green-500"
        backgroundColor="bg-green-500"
        backgroundColorHover="hover:bg-green-700"
        textColor="text-green-700"
        onClick={handleOpenNewNote}
      >
        New
      </Button>
      <dialog className="p-4 rounded" id="addNoteDialog">
        <form className="flex flex-col" onSubmit={handleAddNote}>
          <div>New Note</div>
          <textarea
            rows={4}
            cols={30}
            maxLength={200}
            value={newNoteText}
            onChange={(event) => setNewNoteText(event.target.value)}
            placeholder={"Enter text here..."}
          />
          <div className="flex flex-row p-4 justify-between">
            <Button
              borderColor="border-gray-500"
              backgroundColor="bg-gray-500"
              backgroundColorHover="hover:bg-gray-700"
              textColor="text-gray-700"
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              borderColor="border-green-500"
              backgroundColor="bg-green-500"
              backgroundColorHover="hover:bg-green-700"
              textColor="text-green-700"
            >
              Confirm
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  );
}