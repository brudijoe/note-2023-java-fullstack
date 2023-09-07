package com.brudijoe.noteserver.note;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.brudijoe.noteserver.note.model.Note;
import com.brudijoe.noteserver.note.repository.NoteRepository;

@Configuration
public class NoteConfig {

    @Bean
    CommandLineRunner commandLineRunner(NoteRepository noteRepository) {
        return args -> {
            Note noteOne = new Note(
                    "This is a text - 1"
            );

            Note noteTwo = new Note(
                    "This is a text - 2"
            );

            noteRepository.saveAll(List.of(noteOne, noteTwo));
        };
    }
}