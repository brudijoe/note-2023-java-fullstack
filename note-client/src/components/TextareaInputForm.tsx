import {Note, NoteWithOutId} from "../types/types";

type TextareaProps = {
  note: Note | NoteWithOutId;
  onSetNote: React.Dispatch<React.SetStateAction<Note | NoteWithOutId>>;
};

export function TextareaInputForm({note, onSetNote}: TextareaProps) {
  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newNoteTitle = event.target.value;
    if (onSetNote) {
      onSetNote((prevNote: Note | NoteWithOutId) => ({
        ...prevNote,
        noteTitle: newNoteTitle
      }));
    }
  }

  function handleChangeTextarea(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newNoteText = event.target.value;
    if (onSetNote) {
      onSetNote((prevNote: Note | NoteWithOutId) => ({
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
