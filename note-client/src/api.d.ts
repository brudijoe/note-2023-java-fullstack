interface NoteStore {
  notes: Note[]

  addNote({noteText}: { noteText: string }): void;

  deleteNote(noteId: number): void;
}

interface Note {
  id: number;
  noteText: string;
}