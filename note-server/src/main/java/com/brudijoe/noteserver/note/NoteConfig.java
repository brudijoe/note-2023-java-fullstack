package com.brudijoe.noteserver.note;

import java.time.LocalDate;
import java.time.ZoneId;
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
                    "Title 1",
                    "This is a text - 1", LocalDate.now(ZoneId.of("Europe/Berlin"))
            );

            Note noteTwo = new Note(
                    "Title 2",
                    "This is a text - 2", LocalDate.now(ZoneId.of("Europe/Berlin"))
            );

            noteRepository.saveAll(List.of(noteOne, noteTwo));
        };
    }
}