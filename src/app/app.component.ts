import { Component,AfterViewInit,ChangeDetectorRef,OnInit } from '@angular/core';
import {ClassesService} from "./classes.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit {
  constructor(private clas:ClassesService,private cd: ChangeDetectorRef){}
  ngAfterViewInit(){
  	this.clas.classIncection$.subscribe((props)=>{
		this.classes = props;
		this.cd.detectChanges();
	});
  }
  ngOnInit(){
  	this.classes = "app-component"
  }
public classes = "";
}
