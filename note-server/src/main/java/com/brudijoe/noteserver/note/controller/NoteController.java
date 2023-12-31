package com.brudijoe.noteserver.note.controller;

import java.util.Comparator;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.brudijoe.noteserver.note.model.Note;
import com.brudijoe.noteserver.note.service.NoteService;

@RestController
@RequestMapping(path = "api/v1")
@CrossOrigin
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/notes")
    public ResponseEntity<List<Note>> getNotes() {
        List<Note> notes = noteService.getNotes();
        notes.sort(Comparator.comparing(Note::getNoteId));
        return ResponseEntity.ok(notes);
    }

    @PostMapping("/addNote")
    public ResponseEntity<List<Note>> addNote(@RequestBody Note note) {
        noteService.addNote(note);
        List<Note> updatedNotes = noteService.getNotes();
        updatedNotes.sort(Comparator.comparing(Note::getNoteId));
        return ResponseEntity.status(HttpStatus.CREATED).body(updatedNotes);
    }

    @DeleteMapping(path = "/deleteNote")
    public ResponseEntity<List<Note>> deleteNote(@RequestParam("noteId") Long noteId) {
        noteService.deleteNote(noteId);
        List<Note> updatedNotes = noteService.getNotes();
        updatedNotes.sort(Comparator.comparing(Note::getNoteId));
        return ResponseEntity.ok().body(updatedNotes);
    }


    @PutMapping(path = "/editNote")
    public ResponseEntity<List<Note>> editNote(@RequestParam("noteId") Long noteId, @RequestBody Note note) {
        noteService.editNote(noteId, note.getNoteTitle(), note.getNoteText());
        List<Note> updatedNotes = noteService.getNotes();
        updatedNotes.sort(Comparator.comparing(Note::getNoteId));
        return ResponseEntity.ok().body(updatedNotes);
    }
}