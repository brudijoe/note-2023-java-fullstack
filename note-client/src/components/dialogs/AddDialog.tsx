import {useContext, useState} from "react";
import {NoteContext} from "../../hooks/useNotes";
import {Button} from "../buttons/Button";
import {Title} from "../Title";
import {Dialog} from "../Dialog";
import {ButtonGroup} from "../ButtonGroup";
import {AddTextarea} from "../textareas/AddTextarea";
import {Form} from "../Form";
import {NoteWithOutId} from "../../types/types";
import {trim} from "ramda";

type AddDialogProps = {
  title: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

export function AddDialog({title, dialogRef}: AddDialogProps) {
  const noteContext = useContext(NoteContext);

  if (!noteContext) {
    throw new Error("NoteContext is null");
  }

  const {addNote} = noteContext;
  const [note, setNote] = useState<NoteWithOutId>({
    noteTitle: "",
    noteText: ""
  });

  function handleAddNote() {
    addNote({
      noteTitle: trim(note.noteTitle),
      noteText: trim(note.noteText)
    });
    setNote({
      noteTitle: "",
      noteText: ""
    });
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  }

  function handleDialogClose() {
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
    setNote({
      noteTitle: "",
      noteText: ""
    });
  }

  return (
    <Dialog width="w-6/12" dialogRef={dialogRef}>
      <Form>
        <Title title={title} />
        <AddTextarea note={note} onSetNote={setNote} />
        <ButtonGroup flexDirection="flex-row" justify="justify-between">
          <Button
            borderColor="border-gray-500"
            backgroundColorHover="hover:bg-gray-700"
            onClick={handleDialogClose}
            ariaLabel="cancel"
          >
            Cancel
          </Button>
          {note.noteText === "" ? (
            <Button
              borderColor="border-gray-500"
              backgroundColorHover="hover:bg-gray-700"
              ariaLabel="disabled"
              cursor="cursor-not-allowed"
            >
              Confirm
            </Button>
          ) : (
            <Button
              borderColor="border-green-300"
              backgroundColor="bg-green-500"
              backgroundColorHover="hover:bg-green-700"
              onClick={handleAddNote}
              ariaLabel="confirm"
            >
              Confirm
            </Button>
          )}
        </ButtonGroup>
      </Form>
    </Dialog>
  );
}
