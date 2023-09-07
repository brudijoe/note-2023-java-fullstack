export type NoteStore = {
  notes: Note[] | null;

  loading: boolean;

  error: string | null;

  addNote: ({ noteTitle, noteText }: NoteWithOutId) => void

  deleteNote: (noteId: number) => void

  editNote: (noteId: number, note: Note) => void
};

export type Note = {
  noteId: number;
  noteTitle?: string;
  noteText: string;
};

export type NoteWithOutId = Omit<Note, "noteId"> & {
  noteTitle: string;
};