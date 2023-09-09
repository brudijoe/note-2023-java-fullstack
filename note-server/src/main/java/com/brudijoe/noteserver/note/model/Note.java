package com.brudijoe.noteserver.note.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class Note {

    @Id
    @SequenceGenerator(
            name = "note_sequence",
            sequenceName = "note_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "note_sequence"
    )
    private Long noteId;
    @Column(length = 1024)
    private String noteTitle;
    private String noteText;
    private LocalDate noteCreationDate;

    public Note() {

    }

    public Note(Long noteId, String noteTitle, String noteText, LocalDate noteCreationDate) {
        this.noteId = noteId;
        this.noteTitle = noteTitle;
        this.noteText = noteText;
        this.noteCreationDate = noteCreationDate;
    }

    /* This contructor is for the database and doesn't need a noteId */
    public Note(String noteTitle, String noteText, LocalDate noteCreationDate) {
        this.noteTitle = noteTitle;
        this.noteText = noteText;
        this.noteCreationDate = noteCreationDate;
    }


    public Long getNoteId() {
        return this.noteId;
    }

    public void setNoteId(Long noteId) {
        this.noteId = noteId;
    }

    public String getNoteText() {
        return this.noteText;
    }

    public void setNoteText(String noteText) {
        this.noteText = noteText;
    }

    public String getNoteTitle() {
        return this.noteTitle;
    }

    public void setNoteTitle(String noteTitle) {
        this.noteTitle = noteTitle;
    }


    public LocalDate getNoteCreationDate() {
        return this.noteCreationDate;
    }

    public void setNoteCreationDate(LocalDate noteCreationDate) {
        this.noteCreationDate = noteCreationDate;
    }

    @Override
    public String toString() {
        return "{" +
            " noteId='" + getNoteId() + "'" +
            ", noteTitle='" + getNoteTitle() + "'" +
            ", noteText='" + getNoteText() + "'" +
            ", noteCreationDate='" + getNoteCreationDate() + "'" +
            "}";
    }

}