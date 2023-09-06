export type NoteStore = {
  notes: Note[] | null;

  loading: boolean;

  error: string | null;

  addNote: ({ noteText }: {noteText: string}) => void

  deleteNote: (noteId: number) => void

  editNote: (noteId: number, noteText: string) => void
};

export type Note = {
  noteId: number;
  noteText: string;
};