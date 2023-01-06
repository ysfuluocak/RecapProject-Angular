import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  cars: Car[];
  carImage: CarImage[];
  dataLoaded: boolean = false;
  constructor(
    private carService: CarService,
    private carImageService: CarImageService
  ) {}

  ngOnInit() {
    this.getCars();
    this.getCarDetails(11);
  }

  getCars() {
    this.carService.getCar().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarDetails(carId: number) {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImage = response.data;
    });
  }

  getSrc():string{
    return "https://localhost:44344"+this.carImage[0].imagePath;
    
  }
}


zlxkczxc
