import {Note} from "../types/types";

type InputProps = {
  note: Note;
  placeholder: string;
  onSetNote: React.Dispatch<React.SetStateAction<Note>>;
};

export function Input({note, placeholder, onSetNote}: InputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newNoteTitle = event.target.value;
    if (onSetNote) {
      onSetNote((prevNote) => ({
        ...prevNote,
        noteTitle: newNoteTitle
      }));
    }
  }

  return (
    <input
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white rounded"
      value={note.noteTitle}
      placeholder={placeholder}
      maxLength={50}
      onChange={handleChange}
    />
  );
}
