import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {CarsService} from "../cars.service";
@Component({
  selector: 'app-modal-form-cars',
  templateUrl: './modal-form-cars.component.html',
  styleUrls: ['./modal-form-cars.component.scss']
})
export class ModalFormCarsComponent implements OnInit {

  @Output() outputMesse = new EventEmitter<Number>();
  constructor(private formBuilder:FormBuilder,private service:CarsService) { }

  ngOnInit() {
  	this.service.getTypesOfCar().subscribe((dane:any)=>{
  		let type = dane.type.split(",");
  		type[0] = type[0].slice(1);
  		type[type.length-1] = type[type.length-1].slice(0,type[type.length-1].length-1);
  		for(let ty in type){
  			type[ty] = type[ty].trim();
  		}
  		this.options = type;
  	},(err)=>{
      this.outputMesse.emit(err.status);
    })
  	this.generateForms();
  }
  private generateForms(){
  	this.form = this.formBuilder.group({
  		price:[0,{validators:[Validators.required]}],
  		name:['',{validators:[Validators.required,Validators.minLength(10)]}],
  		type:['',{validators:[Validators.required]}]
  	});
  	this.form.controls['type'].setValue("Osobowe", {onlySelf: true});
  }
  getGenetatedForm(){
  	return this.form;
  }
private form:FormGroup;
public options;
}
