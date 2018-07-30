import { Component, OnInit } from '@angular/core';

import { CarService } from '../shared/car/car.service';
import { Car } from '../shared/car/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(data => {
      this.cars = data.json();
    })
  }

}
