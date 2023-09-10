import {Note, NoteWithOutId} from "../types/types";

type TextareaProps<T> = {
  note: Note | NoteWithOutId;
  onSetNote: React.Dispatch<React.SetStateAction<T>>;
};

export function TextareaInputForm<T>({note, onSetNote}: TextareaProps<T>) {
  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newNoteTitle = event.target.value;
    if (onSetNote) {
      onSetNote((prevNote) => ({
        ...prevNote,
        noteTitle: newNoteTitle
      }));
    }
  }

  function handleChangeTextarea(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newNoteText = event.target.value;
    if (onSetNote) {
      onSetNote((prevNote) => ({
        ...prevNote,
        noteText: newNoteText
      }));
    }
  }

  return (
    <form className="flex flex-col gap-y-2">
      <input
        className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white rounded"
        value={note.noteTitle}
        placeholder="Title (optional)"
        maxLength={50}
        onChange={handleChangeInput}
      />
      <textarea
        className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white rounded"
        rows={8}
        maxLength={1000}
        value={note.noteText}
        placeholder="Enter text here..."
        onChange={handleChangeTextarea}
      />
    </form>
  );
}
