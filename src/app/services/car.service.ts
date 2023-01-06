import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = 'https://localhost:44344/api/Cars/getdetails';
  constructor(private httpClient: HttpClient) {}

  getCar():Observable<ListResponseModel<Car>>{
   return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
}
