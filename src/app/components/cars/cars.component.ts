import { Component, OnInit } from '@angular/core';
import {ClassesService} from "../../classes.service";
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(private subject:ClassesService) { }

  ngOnInit() {
  	this.subject.addClass('cars-component');
  }
public h1_banner:String = "Witaj w wypożyczalni samochodów";
}
