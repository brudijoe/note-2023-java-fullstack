import {Note} from "../types/types";

type TextareaProps = {
  note: Note;
  placeholder: string;
  onSetNote: React.Dispatch<React.SetStateAction<Note>>;
};

export function Textarea({note, placeholder, onSetNote}: TextareaProps) {
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newNoteText = event.target.value;
    if (onSetNote) {
      onSetNote((prevNote) => ({
        ...prevNote,
        noteText: newNoteText
      }));
    }
  }

  return (
    <textarea
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white rounded"
      rows={8}
      maxLength={1000}
      value={note.noteText}
      placeholder={`${placeholder}`}
      onChange={handleChange}
    />
  );
}
