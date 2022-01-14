package com.internship.autopile.car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.boot.context.properties.source.InvalidConfigurationPropertyValueException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping(path = "/api/v1/")
public class CarController {

    private final CarService carService;

    @Autowired
    private CarRepository carRepository;

    @Autowired
    public CarController (CarService carService){
        this.carService = carService;
    }


    @GetMapping("/cars")
    public List<Car> getCars(){
        return carService.getCars();
    }



//    @PostMapping
//    public ResponseEntity<Car> registerNewCar(@RequestBody Car car){
//        carService.addNewCar(car);
//        return ResponseEntity.ok(car);
//    }

//    @PostMapping("/cars")
//    public void createNewCar(@RequestBody Car car){
//        carService.createNewCar(car);
//    }

    @PostMapping("/cars")
    public ResponseEntity<Car> createNewCar(@RequestBody Car car){
        Car carNew = carRepository.save(car);
        return ResponseEntity.ok(carNew);
    }

    //get car info by id
    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> getCarInfoById (@PathVariable Long id) {
        Car car = carRepository.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("id", null, "The car entity does not exist, requested id: " + id));
        return ResponseEntity.ok(car);
    }

    //update car info REST api
    @PutMapping("/cars/{id}")
    public ResponseEntity<Car> updateCarInfo (@PathVariable Long id, @RequestBody Car carInfo){
        Car car = carRepository.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("id", null, "The car entity does not exist, requested id: " + id));

        car.setBrand(carInfo.getBrand());
        car.setModel(carInfo.getModel());
        car.setYear(carInfo.getYear());
        car.setPrice(carInfo.getPrice());

        Car updatedCarInfo = carRepository.save(car);
        return ResponseEntity.ok(updatedCarInfo);
    }

    //delete Car Entity REST API
    @DeleteMapping("/cars/{id}")
    public ResponseEntity <Map<String, Boolean>> deleteCarEntity (@PathVariable Long id) {
        Car car = carRepository.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("id", null, "The car entity does not exist, requested id: " + id));

        carRepository.delete(car);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
