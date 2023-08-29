import {useContext, useState} from "react";
import {NoteContext} from "../../hooks/useNotes";
import {Button} from "../buttons/Button";

interface DialogProps {
  title: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
}

export function AddDialog({title, dialogRef}: DialogProps) {
  const noteContext = useContext(NoteContext);

  if (!noteContext) {
    throw new Error("NoteContext is null");
  }

  const {addNote} = noteContext;
  const [noteText, setNoteText] = useState("");

  function handleAddNote() {
    if (noteText.trim() !== "") {
      addNote({noteText});
      setNoteText("");
    }
    if (dialogRef.current !== null) {
      dialogRef.current.close();
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
          ref={(ref) => ref && ref.focus()}
          onFocus={(event) =>
            event.currentTarget.setSelectionRange(event.currentTarget.value.length, event.currentTarget.value.length)
          }
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
            onClick={handleAddNote}
            ariaLabel="confirm"
          >
            Confirm
          </Button>
        </div>
      </form>
    </dialog>
  );
}
