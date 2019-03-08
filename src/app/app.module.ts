import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { LoginComponent } from './components/login/login.component';
import { CarsComponent } from './components/cars/cars.component';
import { FormsModule} from "@angular/forms";
import { LoginService } from "./components/login/login.service";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from "@angular/forms";
import { LoginGuard} from "./components/login/login.guard";
import { ClassesService} from "./classes.service";
import { ModalCarsComponent } from './components/cars/modal-cars/modal-cars.component';
import { ModalFormCarsComponent } from './components/cars/modal-form-cars/modal-form-cars.component';
import { ModalRegistrationComponent} from "./components/cars/registration/modal-registration/modal-registration.component";
import { ModalRegistrationFormComponent } from './components/cars/registration/modal-registration-form/modal-registration-form.component';
import { SingleCarComponent } from './components/cars/single-car/single-car.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarsComponent,
    ModalCarsComponent,
    ModalFormCarsComponent,
    ModalRegistrationComponent,
    ModalRegistrationFormComponent,
    SingleCarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents:[
  ModalCarsComponent,
  ModalRegistrationComponent
  ],
  providers: [LoginService,LoginGuard,ClassesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
