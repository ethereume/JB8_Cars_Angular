import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from "../components/cars/cars.component";
import { LoginComponent } from "../components/login/login.component";
import { LoginGuard} from "../components/login/login.guard";


const routes: Routes = [
	{path:"",redirectTo:"cars",pathMatch: "full" },
	{path:"login",component:LoginComponent},
	{path:"cars",component:CarsComponent/*,canActivate:[LoginGuard]*/}
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
