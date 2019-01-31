import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators'
/*const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};*/

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl = "http://localhost:2332/api/user/login";
  constructor(private http: HttpClient) { }

  getUser(props) {
  	return this.http.get(`${this.serverUrl}?login=${props.login}&password=${props.password}`).pipe(map((dane)=>{
  		return JSON.stringify(dane);
  	}));
  }
  addUser(props){
  	return this.http.post(this.serverUrl,props).pipe(map((dane)=>{
  		return JSON.stringify(dane);
  	}));
  }
}
