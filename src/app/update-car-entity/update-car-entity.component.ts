import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-update-car-entity',
  templateUrl: './update-car-entity.component.html',
  styleUrls: ['./update-car-entity.component.css']
})
export class UpdateCarEntityComponent implements OnInit {

  id!: number; 
  car: Car= new Car();
  constructor(private carService: CarService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.carService.getCarById(this.id).subscribe( data  => {
        this.car = data; 
    }, error => console.log(error));
  }

  onSubmit() {
    this.carService.updateCarEntity(this.id, this.car).subscribe( data =>  { 
    },  error => console.log(error));
  }

  goToCarList(){
    this.router.navigate(['/cars']);
  }

}
