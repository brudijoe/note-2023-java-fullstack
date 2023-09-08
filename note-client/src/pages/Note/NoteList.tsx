import {map} from "ramda";
import {NoteCard} from "./NoteCard";
import {Note} from "../../types/types";

type NoteListProps = {
  notes: Note[];
};

export function NoteList({notes}: NoteListProps) {
  return (
    <div className="flex flex-col gap-y-2 px-2 pb-2 overflow-y-auto">
      {map(
        (singleNote) => (
          <NoteCard key={singleNote.noteId} singleNote={singleNote} />
        ),
        notes
      )}
    </div>
  );
}
