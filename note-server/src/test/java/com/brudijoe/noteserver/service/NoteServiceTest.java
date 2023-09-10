package com.brudijoe.noteserver.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

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

    @Test
    public void testDeleteNote() {
        Long noteIdToDelete = 1L;

        // Define the behavior of the mock repository
        when(noteRepository.existsById(noteIdToDelete)).thenReturn(true);

        // Call the service method
        noteService.deleteNote(noteIdToDelete);

        // Verify that the note was deleted
        verify(noteRepository, times(1)).deleteById(noteIdToDelete);
    }

    @Test
    public void testEditNote() {
        Long noteIdToEdit = 1L;
        String newTitle = "Updated Title";
        String newText = "Updated Text";

        // Create a sample note
        Note existingNote = new Note(noteIdToEdit, "Original Title", "Original Text", LocalDate.now());

        // Define the behavior of the mock repository
        when(noteRepository.findById(noteIdToEdit)).thenReturn(Optional.of(existingNote));

        // Call the service method
        noteService.editNote(noteIdToEdit, newTitle, newText);

        // Verify that the note was updated
        assertEquals(newTitle, existingNote.getNoteTitle());
        assertEquals(newText, existingNote.getNoteText());
    }

}
