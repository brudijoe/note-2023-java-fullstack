import React, {useContext, useState} from "react";
import {NoteContext} from "../hooks/useNotes";
import {Button} from "./Button";

interface DialogProps {
  title: string;
  existingNoteId?: number;
  existingNoteText?: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
}

export function EditDialog({
                             title,
                             existingNoteId,
                             existingNoteText = "",
                             dialogRef
                           }: DialogProps) {
  const {editNote} = useContext(NoteContext);
  const [noteText, setNoteText] = useState(existingNoteText);

  function handleEditNote() {
    if (existingNoteId !== undefined && noteText !== undefined) {
      editNote(existingNoteId, noteText);
      if (dialogRef.current !== null) {
        dialogRef.current.close();
      }
    }
  }

  function handleDialogClose() {
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
    setNoteText("");
  }

  return (
    <dialog className="p-4 rounded" ref={dialogRef}>
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
          ref={ref => ref && ref.focus()}
          onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
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
            onClick={handleEditNote}
            ariaLabel="confirm"
          >
            Confirm
          </Button>
        </div>
      </form>
    </dialog>
  );
}