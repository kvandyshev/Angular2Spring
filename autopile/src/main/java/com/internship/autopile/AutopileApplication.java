package com.internship.autopile;

import com.internship.autopile.car.Car;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
public class AutopileApplication {
    public static void main(String[] args) {
        SpringApplication.run(AutopileApplication.class, args);
    }
}
