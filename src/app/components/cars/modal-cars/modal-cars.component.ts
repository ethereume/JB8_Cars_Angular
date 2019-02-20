import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {ModalFormCarsComponent} from "../modal-form-cars/modal-form-cars.component";

@Component({
  selector: 'app-modal-cars',
  templateUrl: './modal-cars.component.html',
  styleUrls: ['./modal-cars.component.scss']
})
export class ModalCarsComponent implements OnInit {
  @ViewChild('FormComponen') formModalComponen:ModalFormCarsComponent;
  constructor() { }

  ngOnInit() {
  }
  private dialogRef: MatDialogRef<ModalCarsComponent>;
}
