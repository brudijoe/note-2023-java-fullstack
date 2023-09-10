import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {SETTINGS} from "../settings";
import {NoteStore, Note, NoteWithOutId} from "../types/types";

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

  const addNote = async (newNote: NoteWithOutId): Promise<void> => {
    try {
      const response = await axios.post<Note[]>(`${SETTINGS.HOST}/api/v1/addNote`, newNote);
      setNotes(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError("Error adding note: " + error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const deleteNote = async (noteId: number): Promise<void> => {
    try {
      const response = await axios.delete<Note[]>(`${SETTINGS.HOST}/api/v1/deleteNote/${noteId}`);
      setNotes(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError("Error deleting note: " + error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const editNote = async (noteId: number, note: Note): Promise<void> => {
    try {
      const response = await axios.put<Note[]>(`${SETTINGS.HOST}/api/v1/editNote/${noteId}`, note);
      setNotes(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError("Error editing note: " + error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
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
