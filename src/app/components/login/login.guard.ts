import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private services:LoginService,private route:Router){}	
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
  	if(this.services.getLogged()){
  		return true;
  	}
    this.route.navigate(['/login']);
    return false;
  }
}
