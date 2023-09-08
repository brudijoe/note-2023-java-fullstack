import {Note} from "../types/types";
import {Input} from "./Input";
import {Textarea} from "./Textarea";

type TextareaProps = {
  note: Note;
  onSetNote: React.Dispatch<React.SetStateAction<Note>>;
};

export function TextareaInputForm({note, onSetNote}: TextareaProps) {
  return (
    <form className="flex flex-col gap-y-2">
      <Input note={note} placeholder="Title (optional)" onSetNote={onSetNote} />
      <Textarea note={note} placeholder="Enter text here..." onSetNote={onSetNote} />
    </form>
  );
}
