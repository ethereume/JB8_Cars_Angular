import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginS:LoginService,private route:Router) { }

  ngOnInit() {
  }
  public rejest():void {
  	if(this.parseError()) {
  			this.alerts = "Login i hasło nie mogą pyć puste";
  	} else {
  		this.loginS.addUser({name:this.login_name,password:this.login_pass,admin:this.isAdmin}).subscribe((dane)=>{
			this.parser(dane);
	  	},(err)=>{
	  		console.log(err);
			this.alerts = err.error.message;
	  	});
  	}
  }
  public login():void {
  		if(this.parseError()){
  			this.alerts = "Login i hasło nie mogą pyć puste";
  		} else {
			this.loginS.getUser({login:this.login_name,password:this.login_pass}).subscribe((dane)=>{
				this.parser(dane);
  			},(err)=>{
  				this.alerts = err.error.message;
  			})
  		}
  }
  private parseError(){
  	return this.login_name.trim() === "" || this.login_pass.trim() === "";
  }
  private parser(dane){
		let obj = JSON.parse(dane);
			if(obj.error){
				this.alerts = obj.error;
			} else {
				this.alerts = obj.correct+" "+obj.user.name+" zostałeś od razu zalogowany";
				this.loginS.setLogged(true);
				this.route.navigate(['/cars']);
			}
  }
  public login_name:String = "";
  public login_pass:String = "";
  public isAdmin:Boolean = false;
  public alerts:String = "";
  public login_text_heder:String = "Proszę się zalogować lub zarejestrować";
  public rejest_text_heder:String = "Proszę się zarejestrować";

}
