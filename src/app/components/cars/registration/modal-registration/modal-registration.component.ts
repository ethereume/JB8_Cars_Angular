import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import {ModalRegistrationFormComponent} from "../modal-registration-form/modal-registration-form.component";
import * as moment from 'moment';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material";
@Component({
  selector: 'app-modal-registration',
  templateUrl: './modal-registration.component.html',
  styleUrls: ['./modal-registration.component.scss']
})
export class ModalRegistrationComponent implements OnInit {
   @ViewChild("registrationForm") modal: ModalRegistrationFormComponent;	
  constructor(
  	private dialogRef:MatDialogRef<ModalRegistrationComponent>, 
  	@Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }
  public checkIfDateIsCorrect(){
  	let czyPo = moment(this.modal.data).isBefore(moment());
  	if(czyPo){
  		this.error = "Wybrana data jest nieaktualna, wypożycz przynajmniej na jeden dzień";
  	} else {
  		this.dialogRef.close(this.modal.data);
  		this.error = "";
  	}
  }
public title:string = "Proszę podać datę wynajmu";
public error:string;
}
