import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginS:LoginService) { }

  ngOnInit() {
  }
  public rejest():void {

  }
  public login():void {
  		if(this.login_name.trim() === "" || this.login_pass.trim() === ""){
  			this.alerts = "Login i hasło nie mogą pyć puste";
  		} else {
			this.loginS.getUser({login:this.login_name,password:this.login_pass}).subscribe((dane)=>{
				console.log(dane);
  			},(err)=>{
  				console.log(err);
  				this.alerts = err.error.error.message;
  			})
  		}
  }
  public login_name:String = "";
  public login_pass:String = "";
  public isAdmin:Boolean = false;
  public alerts:String = "Brak błędów";
  public login_text_heder:String = "Proszę się zalogować lub zarejestrować";
  public rejest_text_heder:String = "Proszę się zarejestrować";

}
