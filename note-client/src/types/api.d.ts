type NoteStore = {
  notes: Note[] | null;

  loading: boolean;

  error: string | null;

  addNote: ({ noteText }: {noteText: string}) => void

  deleteNote: (id: number) => void

  editNote: (id: number, noteText: string) => void
};

type Note = {
  id: number;
  noteText: string;
};