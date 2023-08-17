import React, {useRef} from "react";
import {Button} from "../components/Button";
import {EditDialog} from "../components/EditDialog";
import {DeleteDialog} from "../components/DeleteDialog";

export function NoteCard({singleNote}) {
  const editDialogRef = useRef(null);
  const deleteDialogRef = useRef(null);

  const handleEditDialogOpen = () => {
    editDialogRef.current.showModal();
  };

  const handleDeleteDialogOpen = () => {
    deleteDialogRef.current.showModal();
  };

  return (
    <div className="shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] w-60 p-2.5 rounded" key={singleNote.id}>
      <div className="pb-2">{singleNote.id}</div>
      <div className="overflow-y-auto h-40 resize-none">{singleNote.noteText}</div>
      <div className="flex flex-row p-4 justify-between">
        <Button
          borderColor="border-blue-500"
          backgroundColor="bg-blue-500"
          backgroundColorHover="hover:bg-blue-700"
          textColor="text-blue-700"
          onClick={handleEditDialogOpen}
          ariaLabel="edit"
        >
          Edit
        </Button>
        <Button
          borderColor="border-red-500"
          backgroundColor="bg-red-500"
          backgroundColorHover="hover:bg-red-700"
          textColor="text-red-700"
          onClick={handleDeleteDialogOpen}
          ariaLabel="delete"
        >
          Delete
        </Button>
      </div>
      <DeleteDialog title={"Delete Note"} dialogRef={deleteDialogRef} existingNoteId={singleNote.id} />
      <EditDialog type={"edit"} title={"Edit Note"} existingNoteId={singleNote.id} existingNoteText={singleNote.noteText} dialogRef={editDialogRef} />
    </div>
  );
}