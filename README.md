angular registration form

npm install -g @angular/cli@latest
ng new registration-form-app  --no-standalone
cd registration-form-app
ng generate component registration-form



src/app/registration-form/registration-form.component.html

<h2>Registration Form</h2>
<form (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" [(ngModel)]="userData.username" required>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" [(ngModel)]="userData.email" required>
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" [(ngModel)]="userData.password" required>
  </div>
  <button type="submit">Register</button>
</form>




src/app/registration-form/registration-form.component.ts



import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit() {
    // Here you can handle form submission logic, e.g., sending data to a backend API
    console.log('Form submitted with data:', this.userData);
    // You can also add code to display an alert or message upon successful registration
    alert('Registration successful!');
  }
}



Import FormsModule in the Angular module:Open src/app/app.module.ts and import FormsModule from @angular/forms:



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



src/app/app.component.html and add the registration form component:


<div style="text-align:center">
  <h1>Welcome to Registration Form App</h1>
</div>
<app-registration-form></app-registration-form>








ng serve
