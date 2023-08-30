import {useContext, useState} from "react";
import {NoteContext} from "../../hooks/useNotes";
import {Button} from "../buttons/Button";
import {Title} from "../Title";
import {Dialog} from "../Dialog";
import {ButtonGroup} from "../ButtonGroup";
import {Textarea} from "../Textarea";
import {Form} from "../Form";

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
    <Dialog dialogRef={dialogRef}>
      <Form>
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
            borderColor="border-green-300"
            backgroundColor="bg-green-500"
            backgroundColorHover="hover:bg-green-700"
            onClick={handleAddNote}
            ariaLabel="confirm"
          >
            Confirm
          </Button>
        </ButtonGroup>
      </Form>
    </Dialog>
  );
}
