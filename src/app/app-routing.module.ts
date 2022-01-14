import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarEntityDetailsComponent } from './car-entity-details/car-entity-details.component';
import { CarComponent } from './car/car.component'
import { CreateCarEntityComponent } from './create-car-entity/create-car-entity.component';
import { UpdateCarEntityComponent } from './update-car-entity/update-car-entity.component';

const routes: Routes = [
  {path: 'cars', component: CarComponent},
  {path: 'create-car-entity', component: CreateCarEntityComponent},
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: "update-car-entity/:id", component: UpdateCarEntityComponent}, 
  {path: "car-entity-details/:id", component: CarEntityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
