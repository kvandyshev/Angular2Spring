import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-entity-details',
  templateUrl: './car-entity-details.component.html',
  styleUrls: ['./car-entity-details.component.css']
})


export class CarEntityDetailsComponent implements OnInit {

  id!: number;
  car: Car =  new Car();
  constructor(private carService: CarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.car = new Car();
    this.carService.getCarById(this.id).subscribe( data  => {
      this.car = data;
    });
  }


}
