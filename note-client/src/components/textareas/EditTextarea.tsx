import {Note} from "../../types/types";

type TextareaProps = {
  note: Note;
  onSetNote: React.Dispatch<React.SetStateAction<Note>>;
};

export function EditTextarea({note, onSetNote}: TextareaProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <input
        className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        value={note.noteTitle}
        placeholder="Title (optional)"
        maxLength={50}
        onChange={(event) =>
          onSetNote({
            ...note,
            noteTitle: event.target.value
          })
        }
      />
      <textarea
        className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        rows={8}
        maxLength={1000}
        value={note.noteText}
        placeholder="Enter text here..."
        onChange={(event) =>
          onSetNote({
            ...note,
            noteText: event.target.value
          })
        }
      />
    </div>
  );
}
