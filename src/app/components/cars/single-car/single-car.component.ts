import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.scss']
})
export class SingleCarComponent implements OnInit {
 
  @Input() car;
  @Output() event: EventEmitter<Number> = new EventEmitter<Number>();
  @Output() deleted: EventEmitter<Number> = new EventEmitter<Number>();
  constructor(private router:Router,private service:CarsService) { }
  ngOnInit(){
    this.status = this.car.isRent ? "wynajęty":"nie wynajęty"
  }
  public showMenu(id,e){
    e.preventDefault();
    e.stopPropagation();
  	this.event.emit(id);
  }
  public edit(id){
      this.router.navigate(['/cars',id]);
  }
  public usun(id,e){
    e.preventDefault();
    e.stopPropagation();
    this.service.deleteCar(id).subscribe((dane)=>{
      this.deleted.emit(null);
    });
  }
  public status = "nie wynajęty";
}
