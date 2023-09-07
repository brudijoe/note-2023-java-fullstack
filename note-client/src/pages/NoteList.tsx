import {map} from "ramda";
import {NoteCard} from "./NoteCard";
import {Note} from "../types/types";

type NoteListProps = {
  notes: Note[];
};

export function NoteList({notes}: NoteListProps) {
  return (
    <div className="flex flex-row flex-wrap px-4 pb-4 gap-4 overflow-y-auto">
      {map(
        (singleNote) => (
          <NoteCard key={singleNote.noteId} singleNote={singleNote} />
        ),
        notes
      )}
    </div>
  );
}
