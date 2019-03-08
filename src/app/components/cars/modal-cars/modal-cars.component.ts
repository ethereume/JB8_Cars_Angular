import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {ModalFormCarsComponent} from "../modal-form-cars/modal-form-cars.component";
import {CarsService} from "../cars.service";
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-modal-cars',
  templateUrl: './modal-cars.component.html',
  styleUrls: ['./modal-cars.component.scss']
})
export class ModalCarsComponent implements OnInit{
  @ViewChild('FormComponen') formModalComponen:ModalFormCarsComponent;
  constructor(
    private service:CarsService,
    private dialogRef:MatDialogRef<ModalCarsComponent>,
    private snackBar: MatSnackBar
    ) { }
  ngOnInit() {
  }
  public handleError(parameter) {
  	this.error = true;
  }
  public addCar(){
      let car = this.formModalComponen.getGenetatedForm().value;
      car.typeOfCar = car.typeOfCar.toUpperCase();
    this.service.addCar(car).subscribe((dane)=>{
         this.dialogRef.close(true);
         this.snackBar.open("Dodano auto",'',{panelClass:['toast-success-class']});
    },(err)=>{
       this.dialogRef.close(false);
       this.snackBar.open("Nie dodano auta - skontaktuj się z admintratorem",'',{panelClass:['toast-error-class']});
    });
  }
  public error:boolean = false;
}
