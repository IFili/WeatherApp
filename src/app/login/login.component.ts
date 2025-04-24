import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Login, Register } from './login.model';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginForm!: FormGroup;
 public signUpForm! : FormGroup;
  



  constructor(private router: Router , private auth:AuthService, private fb: FormBuilder , private http:HttpClient) {
    

  }

  navigateToWeather(): void {
    this.router.navigate(['/weather']);
  }

  onSubmit(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value)

   
     
        const formValue = this.loginForm.value;
      
        this.auth.login(formValue).subscribe(
          response => {
            console.log('Form submitted successfully', response);
            // Handle the response as needed
            this.navigateToWeather();
          },
          error => {
            console.error('Error submitting form', error);
            // Handle the error as needed
          }
        );
      }
      
  }

  onSignup() {
    const userObject = this.signUpForm.value;
    console.log('User Object:', userObject);
  
    if (this.signUpForm.valid) {
      this.auth.signUp(userObject).subscribe(
        (res) => {
          alert(res.message);
          this.signUpForm.reset();
        },
        (err) => {
          const errorMessage = err.error.message || 'An error occurred.';
          alert(errorMessage);
        }
      );
    }
  }
  


  

ngOnInit() {
  this.loginForm = this.fb.group({
    email: [''], // Add the username control
    password: ['']  // Add the password control
  });

  this.signUpForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    username: [''],
    password: ['']
  });
}


}
