import { Component, OnInit } from '@angular/core';
import {CarsService} from "../cars.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  public car;

  constructor(private service:CarsService,private router:ActivatedRoute) { }

  ngOnInit() {
  

  }
  public edit = "Edycja samochodu"; 
}

