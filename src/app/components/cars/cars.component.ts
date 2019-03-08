import { Component, OnInit,ViewChildren,QueryList,AfterViewInit } from '@angular/core';
import { ClassesService} from "../../classes.service";
import { CarsService } from "./cars.service";
import { ModalCarsComponent} from "./modal-cars/modal-cars.component";
import { ModalRegistrationComponent} from "./registration/modal-registration/modal-registration.component";
import { MatDialog} from "@angular/material";
import { MatSnackBar} from '@angular/material/snack-bar';
import { LoginService} from "../login/login.service";
import { Router} from "@angular/router";
import { SingleCarComponent } from "./single-car/single-car.component";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  @ViewChildren(SingleCarComponent) listCars : QueryList<SingleCarComponent>;
  constructor(private subject:ClassesService,
              private carServices:CarsService,
              private snack:MatSnackBar,
              private dialog:MatDialog,
              private loginS:LoginService,
              private route:Router) { }

  ngOnInit() {
  	this.subject.addClass('cars-component');
    //this.user = this.loginS.getUserName.user.name; // nie usuwać !!
  	this.getCars();
  }
  public showMenu(id){
    this.dialog.open(ModalRegistrationComponent,{data:""}).afterClosed().subscribe((dane)=>{
          if(dane){
            this.carServices.updateDate(id,dane).subscribe((dane)=>{
                this.listCars.map((object)=>{
                  if(id-1 === object.id) {
                    object.status = "wynajęty";
                    object.car.isRent = true;
                  }
                });
            });
        }
    });
  }
  public showMenuForAdd(){
    this.dialog.open(ModalCarsComponent).afterClosed().subscribe((correct)=>{
        if(correct){
          this.getCars();
        }
    });
  }
  public logout() {
     this.loginS.setLogged(false);
     this.route.navigate(["/login"]);
     this.snack.open('Zaostałeś poprawnie wylogowany','',{panelClass:['toast-success-class']});
  }
  private getCars(){
    this.carServices.getCars().subscribe((dane:any)=>{
        this.cars = JSON.parse(dane.cars);
      });
  }
public cars = [];
public user = "";
public h1_banner:String = "Wypożyczalni samochodów";
}
