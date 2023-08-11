interface NoteStore {
  notes: Note[]

  addNote({noteText}: { noteText: string }): void;

  deleteNote(noteId: number): void;

  editNote(noteId: number, newNoteText: string): void;
}

interface Note {
  id: number;
  noteText: string;
}