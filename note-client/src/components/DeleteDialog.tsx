import {useContext} from "react";
import {NoteContext} from "../hooks/useNotes";
import {Button} from "./Button";

interface DialogProps {
  title: string;
  existingNoteId: number;
  dialogRef: React.RefObject<HTMLDialogElement>;
}

export function DeleteDialog({title, existingNoteId, dialogRef}: DialogProps) {
  const noteContext = useContext(NoteContext);

  if (!noteContext) {
    throw new Error("NoteContext is null");
  }

  const {deleteNote} = noteContext;

  function handleDeleteNote() {
    deleteNote(existingNoteId);
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  }

  function handleDialogClose() {
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  }

  return (
    <dialog className="p-4 rounded w-80" ref={dialogRef}>
      <form className="flex flex-col">
        <div>{title}</div>
        <div>{existingNoteId}</div>
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
            borderColor="border-red-500"
            backgroundColorHover="hover:bg-red-700"
            textColor="text-red-700"
            onClick={handleDeleteNote}
            ariaLabel="delete"
          >
            Delete
          </Button>
        </div>
      </form>
    </dialog>
  );
}
