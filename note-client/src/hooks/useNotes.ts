import {useEffect, useState} from "react";
import axios from "axios";

export default function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/note")
      .then((response) => setNotes(response.data))
      .catch((err) => console.log("Error fetching notes:", err));
  }, []);

  return {
    notes
  }
}