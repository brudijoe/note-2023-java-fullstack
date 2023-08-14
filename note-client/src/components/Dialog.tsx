import React, {useContext, useState} from "react";
import {Button} from "./Button";
import {NoteContext} from "../hooks/useNotes";

interface DialogProps {
  type: "add" | "edit";
  title: string;
  dialogId: string;
}

export function Dialog({
                         type,
                         title,
                         dialogId,
                       }: DialogProps) {
  const {addNote} = useContext(NoteContext);
  const [noteText, setNoteText] = useState("");

  function handleAddNote() {
    if (noteText.trim() !== "") {
      addNote({
        noteText: noteText,
      });
      setNoteText("");
    }
    const dialog = document.getElementById("addNoteDialog");
    dialog.close();
  }

  const handleDialog = () => {
    if (type === "add") {
      handleAddNote();
      handleDialogClose();
    } else if (type === "edit") {

    }
  };

  function handleDialogClose() {
    const dialog = document.getElementById(dialogId);
    dialog.close();
    setNoteText("");
  }

  return (
    <dialog className="p-4 rounded" id={dialogId}>
      <form className="flex flex-col">
        <div>{title}</div>
        <textarea
          className="p-2"
          rows={4}
          cols={30}
          maxLength={200}
          value={noteText}
          onChange={(event) => setNoteText(event.target.value)}
          placeholder={"Enter text here..."}
        />
        <div className="flex flex-row p-4 justify-between">
          <Button
            borderColor="border-gray-500"
            backgroundColorHover="hover:bg-gray-700"
            textColor="text-gray-700"
            onClick={handleDialogClose}
            ariaLabel="cancel"
          >
            Cancel
          </Button>
          <Button
            borderColor="border-green-500"
            backgroundColorHover="hover:bg-green-700"
            textColor="text-green-700"
            onClick={handleDialog}
            ariaLabel="confirm"
          >
            Confirm
          </Button>
        </div>
      </form>
    </dialog>
  );
}