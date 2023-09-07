import {useRef} from "react";
import {Button} from "../components/buttons/Button";
import {EditDialog} from "../components/dialogs/EditDialog";
import {DeleteDialog} from "../components/dialogs/DeleteDialog";
import {ButtonGroup} from "../components/ButtonGroup";
import {Note} from "../types/types";
import {NoteInformation} from "./NoteInformation";

type NoteCardProps = {
  singleNote: Note;
};

export function NoteCard({singleNote}: NoteCardProps) {
  const editDialogRef = useRef<HTMLDialogElement | null>(null);
  const deleteDialogRef = useRef<HTMLDialogElement | null>(null);

  const handleEditDialogOpen = () => {
    if (editDialogRef.current) {
      editDialogRef.current.showModal();
    }
  };

  const handleDeleteDialogOpen = () => {
    if (deleteDialogRef.current) {
      deleteDialogRef.current.showModal();
    }
  };

  return (
    <div
      className="flex flex-row justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 border-2 border-black dark:border-white shadow-md rounded"
      key={singleNote.noteId}
    >
      <NoteInformation noteId={singleNote.noteId} />
      <div className="flex-1 px-4 text-justify text-black dark:text-white">{singleNote.noteText}</div>
      <ButtonGroup flexDirection="flex-row" gap="gap-4">
        <Button
          borderColor="border-blue-500"
          backgroundColorHover="hover:bg-blue-700"
          onClick={handleEditDialogOpen}
          ariaLabel="edit"
        >
          Edit
        </Button>
        <Button
          borderColor="border-red-500"
          backgroundColorHover="hover:bg-red-700"
          onClick={handleDeleteDialogOpen}
          ariaLabel="delete"
        >
          Delete
        </Button>
      </ButtonGroup>
      <DeleteDialog title={"Delete Note"} dialogRef={deleteDialogRef} existingNoteId={singleNote.noteId} />
      <EditDialog
        title={"Edit Note"}
        existingNoteId={singleNote.noteId}
        existingNoteText={singleNote.noteText}
        dialogRef={editDialogRef}
      />
    </div>
  );
}
