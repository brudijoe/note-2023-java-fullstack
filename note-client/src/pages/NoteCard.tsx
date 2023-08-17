import React, {useContext, useRef} from "react";
import {Button} from "../components/Button";
import {EditDialog} from "../components/EditDialog";
import {NoteContext} from "../hooks/useNotes";

export function NoteCard({singleNote}) {
  const {deleteNote} = useContext(NoteContext);
  const dialogRef = useRef(null)

  const handleDialogOpen = () => {
    dialogRef.current.showModal();
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
          onClick={handleDialogOpen}
          ariaLabel="edit"
        >
          Edit
        </Button>
        <Button
          borderColor="border-red-500"
          backgroundColor="bg-red-500"
          backgroundColorHover="hover:bg-red-700"
          textColor="text-red-700"
          onClick={() => deleteNote(singleNote.id)}
          ariaLabel="delete"
        >
          Delete
        </Button>
      </div>
      <EditDialog type={"edit"} title={"Edit Note"} existingNoteId={singleNote.id} existingNoteText={singleNote.noteText} dialogRef={dialogRef}/>
    </div>
  );
}