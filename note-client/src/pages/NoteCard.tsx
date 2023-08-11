import React from "react";

export function NoteCard({singleNote, handleEditNote, deleteNote, newNoteText, setNewNoteText, handleCloseModal, handleConfirm}) {
  return (
    <div className="shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] w-60 p-2.5 rounded" key={singleNote.id}>
      <div className="pb-2">{singleNote.id}</div>
      <div className="overflow-y-auto h-40 resize-none">{singleNote.noteText}</div>
      <div className="flex flex-row p-4 justify-between">
        <button className="p-2 w-20" onClick={() => handleEditNote(singleNote.id, singleNote.noteText)}>Edit</button>
        <button className="p-2 w-20" onClick={() => deleteNote(singleNote.id)}>Delete</button>
      </div>
      <dialog className="p-4 rounded" id={`editNoteDialog-${singleNote.id}`}>
        <div className="flex flex-col">
          <div>Edit Note</div>
          <textarea
            rows={4}
            cols={30}
            maxLength={200}
            value={newNoteText}
            onChange={(event) => setNewNoteText(event.target.value)}
          />
          <div className="flex flex-row p-4 justify-between">
            <button className="p-2 w-20" onClick={() => handleCloseModal(singleNote.id)}>Cancel</button>
            <button className="p-2 w-20" type="submit" onClick={() => handleConfirm(singleNote.id)}>Confirm</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}