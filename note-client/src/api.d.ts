interface NoteStore {
  notes: Note[]

  addNote({noteText}: { noteText: string }): void
}

interface Note {
  id: number;
  noteText: string;
}