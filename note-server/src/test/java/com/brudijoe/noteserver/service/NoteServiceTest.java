package com.brudijoe.noteserver.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.brudijoe.noteserver.note.controller.NoteController;
import com.brudijoe.noteserver.note.model.Note;
import com.brudijoe.noteserver.note.repository.NoteRepository;
import com.brudijoe.noteserver.note.service.NoteService;

public class NoteServiceTest {

    @InjectMocks
    private NoteService noteService;

    @Mock
    private NoteRepository noteRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testAddNote() {
        Note newNote = new Note("New Title", "New Text", LocalDate.now());
        
        // Define the behavior of the mock repository
        when(noteRepository.save(any(Note.class))).thenReturn(newNote);

        // Call the service method
        noteService.addNote(newNote);

        // Verify that the note was saved
        verify(noteRepository, times(1)).save(newNote);
    }

    

}
