export type NoteStore = {
  notes: Note[] | null;

  loading: boolean;

  error: string | null;

  addNote: ({ noteText }: {noteText: string}) => Promise<void>

  deleteNote: (noteId: number) => Promise<void>

  editNote: (noteId: number, noteText: string) => Promise<void>
};

export type Note = {
  noteId: number;
  noteText: string;
};