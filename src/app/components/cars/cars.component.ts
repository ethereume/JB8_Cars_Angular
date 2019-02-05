import { Component, OnInit } from '@angular/core';
import {ClassesService} from "../../classes.service";
import { CarsService } from "./cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(private subject:ClassesService,private carServices:CarsService) { }

  ngOnInit() {
  	this.subject.addClass('cars-component');
  	this.carServices.getCars().subscribe((dane)=>{
  		this.cars = JSON.parse(dane.cars);
  	});
  }
public cars;
public h1_banner:String = "Witaj w wypożyczalni samochodów";
}
