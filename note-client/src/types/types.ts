export type NoteStore = {
  notes: Note[] | null;

  loading: boolean;

  error: string | null;

  addNote: ({ noteTitle, noteText }: Note) => void

  deleteNote: (noteId: number) => void

  editNote: (noteId: number, note: Note) => void
};

export type Note = {
  noteId: number | null;
  noteTitle?: string;
  noteText: string;
};