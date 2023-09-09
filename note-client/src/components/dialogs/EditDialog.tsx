import {useContext, useState} from "react";
import {NoteContext} from "../../hooks/useNotes";
import {Button} from "../buttons/Button";
import {Title} from "../Title";
import {Dialog} from "../Dialog";
import {TextareaInputForm} from "../TextareaInputForm";
import {ButtonGroup} from "../ButtonGroup";
import {DialogContentWrapper} from "../DialogContentWrapper";
import {Note} from "../../types/types";

type EditDialogProps = {
  title: string;
  existingNoteId: number;
  existingNoteTitle?: string;
  existingNoteText: string;
  existingNoteCreationDate: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

export function EditDialog({
  title,
  existingNoteId,
  existingNoteTitle = "",
  existingNoteText = "",
  existingNoteCreationDate,
  dialogRef
}: EditDialogProps) {
  const noteContext = useContext(NoteContext);

  if (!noteContext) {
    throw new Error("NoteContext is null");
  }

  const {editNote} = noteContext;
  const [note, setNote] = useState<Note>({
    noteId: existingNoteId,
    noteTitle: existingNoteTitle,
    noteText: existingNoteText,
    noteCreationDate: existingNoteCreationDate
  });

  function handleEditNote() {
    if (existingNoteId !== undefined) {
      editNote(existingNoteId, note);
      if (dialogRef.current !== null) {
        dialogRef.current.close();
      }
    }
  }

  function handleDialogClose() {
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
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
          <Button
            borderColor="border-green-300"
            backgroundColor="bg-green-500"
            backgroundColorHover="hover:bg-green-700"
            onClick={handleEditNote}
            ariaLabel="confirm"
          >
            Confirm
          </Button>
        </ButtonGroup>
      </DialogContentWrapper>
    </Dialog>
  );
}
