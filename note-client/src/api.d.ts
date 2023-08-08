interface NoteStore {
  notes: Note[]

  addNote({noteText}: { noteText: string }): void
}

interface Note {
  noteText: string;
}