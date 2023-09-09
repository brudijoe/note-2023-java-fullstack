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

import com.brudijoe.noteserver.note.model.Note;
import com.brudijoe.noteserver.note.repository.NoteRepository;
import com.brudijoe.noteserver.note.service.NoteService;

public class NoteServiceTest {

    @Mock
    NoteRepository noteRepository;

    @InjectMocks
    private NoteService noteService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetNotes() {
        // Create test data
        List<Note> testData = new ArrayList<>();
        LocalDate currentDate = LocalDate.now(ZoneId.of("Europe/Berlin"));
        testData.add(new Note(1L, "Title 1", "Note 1", currentDate));
        testData.add(new Note(2L, "Title 2", "Note 2", currentDate));

        // Define the behavior of the mocked repository
        when(noteRepository.findAll()).thenReturn(testData);

        // Call the method you want to test
        List<Note> result = noteService.getNotes();

        // Assert that the result matches your expectations
        assertEquals(2, result.size());
    }

    @Test
    public void testAddNote() {
        // Create test data
        List<Note> testData = new ArrayList<>();
        LocalDate currentDate = LocalDate.now(ZoneId.of("Europe/Berlin"));
        testData.add(new Note(1L, "Title 1", "Note 1", currentDate));
        Note singleNote = new Note(2L, "singleNoteTitle", "singleNote", currentDate);

        // Define the behavior of the mocked repository for saving a note
        when(noteRepository.save(any(Note.class))).thenReturn(singleNote);

        // Call the addNote method to add the singleNote
        noteService.addNote(singleNote);

        // Verify that the noteRepository.save method was called once with the singleNote object
        verify(noteRepository, times(1)).save(singleNote);

    }

}
