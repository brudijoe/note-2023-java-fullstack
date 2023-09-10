export type NoteStore = {
  notes: Note[] | null;
  loading: boolean;
  error: string | null;
  addNote: ({ noteTitle, noteText }: NoteWithOutId) => Promise<void>;
  deleteNote: (noteId: number) => Promise<void>;
  editNote: (noteId: number, note: Note) => Promise<void>;
};

export type Note = {
  noteId?: number;
  noteTitle?: string;
  noteText: string;
  noteCreationDate?: string;
};

export type NoteWithOutId = Omit<Note, "noteId" | "noteCreationDate">;