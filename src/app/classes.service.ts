import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor() { }

  public classIncection$ = new Subject<any>();
  public addClass(componentName){
  		console.log("wysylam");
  		this.classIncection$.next(componentName);
  }
}
