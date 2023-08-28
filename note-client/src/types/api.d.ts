interface NoteStore {
  notes: Note[];

  loading: boolean;

  error: string | null;

  addNote: ({ noteText }: {noteText: string}) => void

  deleteNote: (id: number) => void

  editNote: (id: number, noteText: string) => void
}

interface Note {
  id: number;
  noteText: string;
}