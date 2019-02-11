import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private serverUrl = "http://localhost:2332/api/cars/";
  constructor(private http:HttpClient) { }

  public getCars(){
  	return this.http.get(this.serverUrl).pipe(map((dane)=>{
  		return dane;
  	}));
  }
  public getTypesOfCar(){
  	return this.http.get(this.serverUrl+"types").pipe(map((dane)=>{
  		return dane;
  	}));
  }
}
