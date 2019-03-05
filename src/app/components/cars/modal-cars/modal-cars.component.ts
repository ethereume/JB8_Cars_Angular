import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {ModalFormCarsComponent} from "../modal-form-cars/modal-form-cars.component";

@Component({
  selector: 'app-modal-cars',
  templateUrl: './modal-cars.component.html',
  styleUrls: ['./modal-cars.component.scss']
})
export class ModalCarsComponent implements OnInit{
  @ViewChild('FormComponen') formModalComponen:ModalFormCarsComponent;
  constructor() { }
  ngOnInit() {
  }
  public handleError(parameter) {
  	this.error = true;
  }
  public error:boolean = false;
}
