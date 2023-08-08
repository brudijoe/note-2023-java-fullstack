package com.brudijoe.noteserver.note;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1")
@CrossOrigin
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/notes")
    public ResponseEntity<List<Note>> getNotes() {
        List<Note> notes = noteService.getNotes();
        return ResponseEntity.ok(notes);
    }

    @PostMapping("/addNote")
    public ResponseEntity<List<Note>> addNote(@RequestBody Note note) {
        noteService.addNewNote(note);
        List<Note> updatedNotes = noteService.getNotes();
        return ResponseEntity.status(HttpStatus.CREATED).body(updatedNotes);
    }

    @DeleteMapping(path = "/deleteNote/{id}")
    public ResponseEntity<List<Note>> deleteNote(@PathVariable("id") Long id) {
        noteService.deleteNote(id);
        List<Note> updatedNotes = noteService.getNotes();
        return ResponseEntity.ok().body(updatedNotes);
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<Void> updateNote(
            @PathVariable("id") Long id,
            @RequestParam(required = false) String noteText
    ) {
        noteService.updateNote(id, noteText);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}