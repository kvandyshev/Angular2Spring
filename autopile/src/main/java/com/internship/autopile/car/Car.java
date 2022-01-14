package com.internship.autopile.car;

import javax.persistence.*;


//POST http://localhost:8080/api/v1/car
//        Content-Type: application/json
//
//        {
//        "brand": "Toyota",
//        "model": "Prius",
//        "year": "2005",
//        "price": "1300"
//        }
//


@Entity
@Table
public class Car {
    @Id
    @SequenceGenerator(
            name = "car_sequence",
            sequenceName = "car_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "car_sequence"
    )

    private Long id;
    private String brand;
    private String model;
    private Long year;
    private Long price;



    public Car(Long id, String brand, String model, Long year, Long price) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    public Car(String brand, String model, Long year, Long price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    public Car() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                ", price=" + price +
                '}';
    }
}
