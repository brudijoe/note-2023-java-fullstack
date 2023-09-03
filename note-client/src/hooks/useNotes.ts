import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {SETTINGS} from "../settings";

type SimpleNote = Pick<Note, "noteText">;

export const NoteContext = createContext<NoteStore | null>(null);

export default function useNotes(): NoteStore {
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Note[]>(`${SETTINGS.HOST}/api/v1/notes`)
      .then((response) => {
        setNotes(response.data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError("Error getting notes: " + err.message);
        setLoading(false);
      });
  }, []);

  const addNote = (newNote: SimpleNote) => {
    axios
      .post<Note[]>(`${SETTINGS.HOST}/api/v1/addNote`, newNote)
      .then((response) => {
        const updatedNotes = response.data;
        setNotes(updatedNotes);
      })
      .catch((err: Error) => {
        setError("Error adding note: " + err.message);
      });
  };

  const deleteNote = (noteId: number) => {
    axios
      .delete<Note[]>(`${SETTINGS.HOST}/api/v1/deleteNote/${noteId}`)
      .then((response) => {
        const updatedNotes = response.data;
        setNotes(updatedNotes);
      })
      .catch((err: Error) => {
        setError("Error deleting note: " + err.message);
      });
  };

  const editNote = (noteId: number, newNoteText: string) => {
    console.log(noteId);
    axios
      .put<Note[]>(`${SETTINGS.HOST}/api/v1/editNote/${noteId}`, {
        noteText: newNoteText
      })
      .then((response) => {
        const updatedNotes = response.data;
        console.log(response);
        setNotes(updatedNotes);
      })
      .catch((err: Error) => {
        setError("Error editing note: " + err.message);
      });
  };

  return {
    notes,
    loading,
    error,
    addNote,
    deleteNote,
    editNote
  };
}
