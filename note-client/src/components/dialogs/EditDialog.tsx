import {useContext, useState} from "react";
import {NoteContext} from "../../hooks/useNotes";
import {Button} from "../buttons/Button";
import {Title} from "../Title";
import {Dialog} from "../Dialog";
import {Textarea} from "../Textarea";
import {ButtonGroup} from "../ButtonGroup";

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
    <Dialog dialogRef={dialogRef}>
      <form className="flex flex-col">
        <Title title={title} />
        <Textarea noteText={noteText} onSetNoteText={setNoteText} />
        <ButtonGroup>
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
        </ButtonGroup>
      </form>
    </Dialog>
  );
}
