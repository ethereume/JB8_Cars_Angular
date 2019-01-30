import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from "../components/cars/cars.component";
import { LoginComponent } from "../components/login/login.component";


const routes: Routes = [
	{path:"",redirectTo:"login",pathMatch: "full" },
	{path:"login",component:LoginComponent},
	{path:"cars",component:CarsComponent}
	];
@NgModule({
  imports: [
   RouterModule.forRoot(routes),
  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
