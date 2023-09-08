import {useContext, useState} from "react";
import {NoteContext} from "../../hooks/useNotes";
import {Button} from "../buttons/Button";
import {Title} from "../Title";
import {Dialog} from "../Dialog";
import {ButtonGroup} from "../ButtonGroup";
import {TextareaInputForm} from "../TextareaInputForm";
import {DialogContentWrapper} from "../DialogContentWrapper";
import {trim} from "ramda";
import {Note} from "../../types/types";

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
  const [note, setNote] = useState<Note>({
    noteId: null,
    noteTitle: "",
    noteText: ""
  });

  function handleAddNote() {
    addNote({
      noteId: null,
      noteTitle: note.noteTitle ? trim(note.noteTitle) : "",
      noteText: trim(note.noteText)
    });
    setNote({
      noteId: null,
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
      noteId: null,
      noteTitle: "",
      noteText: ""
    });
  }

  return (
    <Dialog width="w-6/12" dialogRef={dialogRef}>
      <DialogContentWrapper>
        <Title title={title} />
        <TextareaInputForm note={note} onSetNote={setNote} />
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
      </DialogContentWrapper>
    </Dialog>
  );
}
