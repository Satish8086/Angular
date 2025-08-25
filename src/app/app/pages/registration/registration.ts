import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.scss'
})
export class Registration {
 registerForm: FormGroup;
  submitted = false;
  passwordMismatch = false;

  constructor(private fb: FormBuilder,public router:Router) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Reset password mismatch check
    this.passwordMismatch = false;

    if (this.registerForm.invalid) return;

    const { password, confirmPassword } = this.registerForm.value;
    if (password !== confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    // ✅ Form is valid - you can send it to your backend
    console.log('Registration Data:', this.registerForm.value);
    this.router.navigate(['dashboard']);
  }
}