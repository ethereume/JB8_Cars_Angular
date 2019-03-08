import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.scss']
})
export class SingleCarComponent implements OnInit {
 
  @Input() car;
  @Input() id;
  @Output() event: EventEmitter<Number> = new EventEmitter<Number>();
  constructor() { }
  ngOnInit(){
    this.status = this.car.isRent ? "wynajęty":"nie wynajęty"
  }
  public showMenu(id,e){
  	e.preventDefault();
  	this.event.emit(id+1);
  }
  public status = "nie wynajęty";
}
