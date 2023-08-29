import {useRef} from "react";
import {Button} from "../components/buttons/Button";
import {EditDialog} from "../components/dialogs/EditDialog";
import {DeleteDialog} from "../components/dialogs/DeleteDialog";
import {ButtonGroup} from "../components/ButtonGroup";
interface NoteCardProps {
  singleNote: Note;
}

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
      className="w-72 p-4 bg-gray-200 dark:bg-gray-800 border-2 border-black dark:border-white shadow-md rounded"
      key={singleNote.id}
    >
      <div className="pb-2 text-black dark:text-white">{singleNote.id}</div>
      <div className="overflow-y-auto h-40 resize-none text-black dark:text-white">{singleNote.noteText}</div>
      <ButtonGroup>
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
      <DeleteDialog title={"Delete Note"} dialogRef={deleteDialogRef} existingNoteId={singleNote.id} />
      <EditDialog
        title={"Edit Note"}
        existingNoteId={singleNote.id}
        existingNoteText={singleNote.noteText}
        dialogRef={editDialogRef}
      />
    </div>
  );
}
