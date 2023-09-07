import {Note} from "../../types/types";

type NoteInformationProps = {
  note: Note;
};

export function NoteInformation({note}: NoteInformationProps) {
  return (
    <div className="flex flex-col">
      <div className=" text-black dark:text-white">{note.noteId}</div>
      <div className="text-black dark:text-white">Created: 9/2/2023</div>
    </div>
  );
}
