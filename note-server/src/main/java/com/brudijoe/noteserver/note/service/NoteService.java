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

    public void addNewNote(Note note) {
        noteRepository.save(note);
    }

    public void deleteNote(Long id) {
        boolean exists = noteRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("note with id: " + id + " does not exists");
        }
        noteRepository.deleteById(id);
    }

    @Transactional
    public void updateNote(Long id, String noteText) {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("note with id: " + id + " does not exist"));

        if (noteText != null &&
                noteText.length() > 0 &&
                !Objects.equals(note.getNoteText(), noteText)) {
            note.setNoteText(noteText);
        }
    }
}