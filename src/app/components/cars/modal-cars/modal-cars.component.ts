import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-modal-cars',
  templateUrl: './modal-cars.component.html',
  styleUrls: ['./modal-cars.component.scss']
})
export class ModalCarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private dialogRef: MatDialogRef<ModalCarsComponent>;
}
