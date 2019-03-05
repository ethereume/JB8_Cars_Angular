import { Component, OnInit } from '@angular/core';
import {ClassesService} from "../../classes.service";
import { CarsService } from "./cars.service";
import {ModalCarsComponent} from "./modal-cars/modal-cars.component";
import {ModalRegistrationComponent} from "./registration/modal-registration/modal-registration.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(private subject:ClassesService,
              private carServices:CarsService,
              private dialog:MatDialog
              ) { }

  ngOnInit() {
  	this.subject.addClass('cars-component');
  	this.carServices.getCars().subscribe((dane:any)=>{
  		this.cars = JSON.parse(dane.cars);
  	});
  }
  public showMenu(e){
    e.preventDefault();
    this.dialog.open(ModalRegistrationComponent);
  }
  public showMenuForAdd(){
    this.dialog.open(ModalCarsComponent);
  }
public cars = [];
public h1_banner:String = "Witaj w wypożyczalni samochodów";
}
