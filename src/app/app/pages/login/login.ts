import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
loginForm: FormGroup;
  submitted = false;
  loginSuccess = false;

  constructor(private fb: FormBuilder,public router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
       alert('Invalid credentials');
      return;
    }

    const { email, password } = this.loginForm.value;

    // Simulate login logic
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.loginSuccess = true;
      console.log('Logged in:', { email, password });
     this.router.navigate(['/dashboard']) 
    } else {
      alert('Invalid credentials');
    }
  }
  signUp(){
    this.router.navigate(['signUp'])
  }
}

