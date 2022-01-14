package com.internship.autopile.car;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;


@Configuration
public class CarConfig {


    @Bean
    CommandLineRunner commandLineRunner(CarRepository repository) {
        return args -> {
                Car mercides = new Car(
                        "Mercedes",
                        "Vito",
                        1998l,
                        540l
                );

            Car opel = new Car(
                    "Opel",
                    "Astra",
                    1993l,
                    320l

            );

            repository.saveAll(List.of(mercides, opel));
        };
    }
}
