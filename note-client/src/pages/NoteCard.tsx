import React from "react";
import {Button} from "../components/Button";

export function NoteCard({singleNote, handleEditNote, deleteNote, newNoteText, setNewNoteText, handleCloseModal, handleEditConfirm}) {
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
          onClick={() => handleEditNote(singleNote.id, singleNote.noteText)}
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
      <dialog className="p-4 rounded" id={`editNoteDialog-${singleNote.id}`}>
        <div className="flex flex-col">
          <div>Edit Note</div>
          <textarea
            className="p-2"
            rows={4}
            cols={30}
            maxLength={200}
            value={newNoteText}
            onChange={(event) => setNewNoteText(event.target.value)}
          />
          <div className="flex flex-row p-4 justify-between">
            <Button
              borderColor="border-gray-500"
              backgroundColor="bg-gray-500"
              backgroundColorHover="hover:bg-gray-700"
              textColor="text-gray-700"
              onClick={() => handleCloseModal(singleNote.id)}
              ariaLabel="cancel"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              borderColor="border-green-500"
              backgroundColor="bg-green-500"
              backgroundColorHover="hover:bg-green-700"
              textColor="text-green-700"
              onClick={() => handleEditConfirm(singleNote.id)}
              ariaLabel="confirm"
            >
              Confirm
            </Button>
          </div>
        </div>
      </dialog>
    </div>
  );
}