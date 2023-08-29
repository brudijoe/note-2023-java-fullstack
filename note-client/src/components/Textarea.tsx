interface TextareaProps {
  noteText: string;
  onSetNoteText: (text: string) => void;
}

export function Textarea({noteText, onSetNoteText}: TextareaProps) {
  return (
    <textarea
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
      rows={4}
      cols={200}
      maxLength={200}
      value={noteText}
      onChange={(event) => onSetNoteText(event.target.value)}
      placeholder={"Enter text here..."}
      ref={(ref) => ref && ref.focus()}
      onFocus={(event) =>
        event.currentTarget.setSelectionRange(event.currentTarget.value.length, event.currentTarget.value.length)
      }
    />
  );
}
