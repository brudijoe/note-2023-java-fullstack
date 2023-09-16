package com.brudijoe.noteserver.note.model;

import java.time.LocalDate;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "note")
public class Note {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "note_id")
    private Long noteId;
    @Column(name = "note_title", length = 255)
    private String noteTitle;
    @Column(name = "note_text", length = 255)
    private String noteText;
    @Column(name = "note_creationDate")
    private LocalDate noteCreationDate;

    public Note() {

    }

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