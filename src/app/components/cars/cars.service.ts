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
  	return this.http.get(this.serverUrl);
  }
  public getTypesOfCar(){
  	return this.http.get(this.serverUrl+"types").pipe(map((dane)=>{
  		return dane;
  	}));
  }
  public addCar(car:any){
    console.log(car);
    return this.http.post(this.serverUrl,car);
  }
  public updateDate(id,date){
    return this.http.put(`${this.serverUrl}data/${id}`,{data:date});
  }
  public getCar(id) {
      return this.http.post(`${this.serverUrl}car/${id}`,{id});
  }
  public deleteCar(id) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }
}
