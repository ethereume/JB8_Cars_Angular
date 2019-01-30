import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public rejest():void {

  }
  public login():void {

  }
  public login_name:String = "";
  public login_pass:String = "";
  public login_text_heder:String = "Proszę się zalogować lub zarejestrować";

}
