type TextareaProps = {
  noteText: string;
  onSetNoteText: (text: string) => void;
};

export function Textarea({noteText, onSetNoteText}: TextareaProps) {
  return (
    <textarea
      className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
      rows={8}
      maxLength={1000}
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
