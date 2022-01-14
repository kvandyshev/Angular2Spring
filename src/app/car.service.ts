import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseURL = "http://localhost:8080/api/v1/cars";
  
  constructor(private httpClient: HttpClient) { }

  getCarsList(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${this.baseURL}`);
  }

  createNewCarEntity(car: Car): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, car); 
  }

  getCarById(id: number): Observable<Car>{ 
    return this.httpClient.get<Car>(`${this.baseURL}/${id}`);
  }

  updateCarEntity(id: number, car: Car): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, car);
  }

  deleteCarEntity(id: number): Observable<Object> { 
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

}
