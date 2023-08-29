import {useContext} from "react";
import {NoteContext} from "../../hooks/useNotes";
import {Button} from "../buttons/Button";

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
    <dialog
      className="w-80 p-4 bg-gray-200 dark:bg-gray-800 border-2 border-black dark:border-white rounded"
      ref={dialogRef}
    >
      <form className="flex flex-col">
        <div className="text-black dark:text-white font-bold">{title}</div>
        <div className="text-black dark:text-white">{existingNoteId}</div>
        <div className="flex flex-row pt-2 justify-between">
          <Button
            borderColor="border-gray-500"
            backgroundColorHover="hover:bg-gray-700"
            onClick={handleDialogClose}
            ariaLabel="cancel"
          >
            Cancel
          </Button>
          <Button
            borderColor="border-red-500"
            backgroundColorHover="hover:bg-red-700"
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
