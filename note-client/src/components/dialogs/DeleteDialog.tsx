import {useContext} from "react";
import {NoteContext} from "../../hooks/useNotes";
import {Button} from "../buttons/Button";
import {Title} from "../Title";
import {Dialog} from "../Dialog";
import {ButtonGroup} from "../ButtonGroup";
import {Form} from "../Form";

type DeleteDialogProps = {
  title: string;
  existingNoteId: number;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

export function DeleteDialog({title, existingNoteId, dialogRef}: DeleteDialogProps) {
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
    <Dialog width="w-72" dialogRef={dialogRef}>
      <Form>
        <Title title={title} />
        <div className="text-black dark:text-white">{existingNoteId}</div>
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
            borderColor="border-red-300"
            backgroundColor="bg-red-500"
            backgroundColorHover="hover:bg-red-700"
            onClick={handleDeleteNote}
            ariaLabel="delete"
          >
            Delete
          </Button>
        </ButtonGroup>
      </Form>
    </Dialog>
  );
}
