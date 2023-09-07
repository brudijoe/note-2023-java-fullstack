package com.brudijoe.noteserver.note.model;

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

    public Note() {

    }

    public Note(Long noteId, String noteText, String noteTitle) {
        this.noteId = noteId;
        this.noteText = noteText;
        this.noteTitle = noteTitle;
    }

    public Note(String noteTitle, String noteText) {
        this.noteTitle = noteTitle;
        this.noteText = noteText;
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


    @Override
    public String toString() {
        return "{" +
            " noteId='" + getNoteId() + "'" +
            ", noteText='" + getNoteText() + "'" +
            ", noteTitle='" + getNoteTitle() + "'" +
            "}";
    }

}