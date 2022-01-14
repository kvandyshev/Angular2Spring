import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car'
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars!: Car[];
  constructor(private carService: CarService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getCars();
    // this.cars = [{
    //     "id": 34, 
    //     "brand": "Toyota",
    //     "model": "Prius",
    //     "year": 2005,
    //     "price": 1300
    //    }];
  }
  
  
  private getCars(){
    this.carService.getCarsList().subscribe(data => {
      this.cars = data;
    });
  }

  viewCarInfo (id:number) { 
    this.router.navigate(['car-entity-details', id]); 
  }


  updateCarInfo (id:number) { 
    this.router.navigate(['update-car-entity', id]); 
  }

  deleteCarInfo (id:number) { 
    this.carService.deleteCarEntity(id).subscribe(data => {
      console.log(data);
      this.getCars();
    })
  }
}
