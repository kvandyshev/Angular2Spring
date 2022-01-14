import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CreateCarEntityComponent } from './create-car-entity/create-car-entity.component';
import { FormsModule } from '@angular/forms';
import { UpdateCarEntityComponent } from './update-car-entity/update-car-entity.component';
import { CarEntityDetailsComponent } from './car-entity-details/car-entity-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CreateCarEntityComponent,
    UpdateCarEntityComponent,
    CarEntityDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
