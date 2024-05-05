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
