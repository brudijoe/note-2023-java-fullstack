import {Note} from "../../types/types";

type NoteContentProps = {
  note: Note;
};

export function NoteContent({note}: NoteContentProps) {
  return (
    <div className="flex-1 px-4">
      {note.noteTitle ? (
        <div className="flex flex-col">
          <div className="text-left font-bold text-lg text-black dark:text-white">{note.noteTitle}</div>
          <div className="text-justify text-black dark:text-white">{note.noteText}</div>
        </div>
      ) : (
        <div className="text-justify text-black dark:text-white">{note.noteText}</div>
      )}
    </div>
  );
}
