package com.brudijoe.noteserver.note.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.brudijoe.noteserver.note.model.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {

    @Query("SELECT n FROM Note n WHERE n.id = ?1")
    Optional<Note> findById(Long id);

}