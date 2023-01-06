import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
apiUrl:string ="https://localhost:44344/api/";
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath:string =this.apiUrl+"CarImages/getimage?id=11"
    return this.httpClient.get<ListResponseModel<CarImage>>("https://localhost:44344/api/CarImages/getimagesbycarid?id=11");
  }
}
