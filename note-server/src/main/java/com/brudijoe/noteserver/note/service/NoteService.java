package com.brudijoe.noteserver.note.service;

import java.util.List;
import java.util.Objects;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import com.brudijoe.noteserver.note.model.Note;
import com.brudijoe.noteserver.note.repository.NoteRepository;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public List<Note> getNotes() {
        return noteRepository.findAll();
    }

    public void addNote(Note note) {
        noteRepository.save(note);
    }

    public void deleteNote(Long noteId) {
        boolean exists = noteRepository.existsById(noteId);
        if (!exists) {
            throw new IllegalStateException("note with noteId: " + noteId + " does not exists");
        }
        noteRepository.deleteById(noteId);
    }

    @Transactional
    public void updateNote(Long noteId, String noteText) {
        Note note = noteRepository.findById(noteId)
                .orElseThrow(() -> new IllegalStateException("note with noteId: " + noteId + " does not exist"));

        if (noteText != null &&
                noteText.length() > 0 &&
                !Objects.equals(note.getNoteText(), noteText)) {
            note.setNoteText(noteText);
        }
    }
}