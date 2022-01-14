import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-create-car-entity',
  templateUrl: './create-car-entity.component.html',
  styleUrls: ['./create-car-entity.component.css']
})
export class CreateCarEntityComponent implements OnInit {

  car: Car = new Car();
  constructor(private carService: CarService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCarEntity(){ 
    this.carService.createNewCarEntity(this.car).subscribe( 
      data => {
     console.log(data); 
     // console.log("Hello");
     this.goToCarList();
    }, 
    error => {
      console.log(error);
      this.goToCarList();
    }); 
  }

  goToCarList(){
    this.router.navigate(['cars']);
  }

  onSubmit() {
    console.log(this.car);
    this.saveCarEntity();
  }


}
