import {useContext, useState} from "react";
import {NoteContext} from "../../hooks/useNotes";
import {Button} from "../buttons/Button";

interface DialogProps {
  title: string;
  existingNoteId?: number;
  existingNoteText?: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
}

export function EditDialog({title, existingNoteId, existingNoteText = "", dialogRef}: DialogProps) {
  const noteContext = useContext(NoteContext);

  if (!noteContext) {
    throw new Error("NoteContext is null");
  }

  const {editNote} = noteContext;
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
    <dialog
      className="p-4 bg-gray-200 dark:bg-gray-800 border-2 border-black dark:border-white rounded"
      ref={dialogRef}
    >
      <form className="flex flex-col">
        <div className="text-black dark:text-white font-bold">{title}</div>
        <textarea
          className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
          rows={4}
          cols={30}
          maxLength={200}
          value={noteText}
          onChange={(event) => setNoteText(event.target.value)}
          placeholder={"Enter text here..."}
          ref={(ref) => ref && ref.focus()}
          onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
        />
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
            borderColor="border-green-500"
            backgroundColorHover="hover:bg-green-700"
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
