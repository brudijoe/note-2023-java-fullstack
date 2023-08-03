package com.brudijoe.noteserver.note;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class NoteConfig {

    @Bean
    CommandLineRunner commandLineRunner(NoteRepository noteRepository) {
        return args -> {
            Note noteOne = new Note(
                    "Das ist ein Text - 1"
            );

            Note noteTwo = new Note(
                    "Das ist ein Text - 2"
            );

            noteRepository.saveAll(List.of(noteOne, noteTwo));
        };
    }
}