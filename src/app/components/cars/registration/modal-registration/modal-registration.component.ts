import { Component, OnInit,ViewChild } from '@angular/core';
import {ModalRegistrationFormComponent} from "../modal-registration-form/modal-registration-form.component";

@Component({
  selector: 'app-modal-registration',
  templateUrl: './modal-registration.component.html',
  styleUrls: ['./modal-registration.component.scss']
})
export class ModalRegistrationComponent implements OnInit {
   @ViewChild("registrationForm") modal: ModalRegistrationFormComponent;	
  constructor() { }

  ngOnInit() {
  }
public title:String = "Proszę podać datę wynajmu";
}
