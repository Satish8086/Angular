import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration } from './registration';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
describe('Registration', () => {
  let component: Registration;
  let routerSpy: jasmine.SpyObj<Router>;
  let fb: FormBuilder;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    fb = new FormBuilder();

    component = new Registration(fb, routerSpy);
    component.registerForm = fb.group({
      password: [''],
      confirmPassword: ['']
    });
  });

  it('should set submitted to true when onSubmit is called', () => {
    component.onSubmit();
    expect(component.submitted).toBeTrue();
  });
  it('when form submitted', () => {
    component.onSubmit();
    expect(component.registerForm.invalid).toBeFalse();    
  });

  it('password check correct', () => {
    component.onSubmit();
    expect(component.registerForm.controls['password'].value == component.registerForm.controls['confirmPassword'].value).toBeTrue();    
  });
it('password check wrong', () => {
    component.onSubmit();
    expect(component.registerForm.controls['password'].value !== component.registerForm.controls['confirmPassword'].value).toBeFalse();    
  });
  it('should not proceed if form is invalid', () => {
    component.registerForm.setErrors({ invalid: true });
    component.onSubmit();
    expect(component.passwordMismatch).toBeFalse();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should set passwordMismatch to true if passwords do not match', () => {
    component.registerForm.setValue({ password: 'pass1', confirmPassword: 'pass2' });
    component.onSubmit();
    expect(component.passwordMismatch).toBeTrue();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should navigate to dashboard if form is valid and passwords match', () => {
    component.registerForm.setValue({ password: 'pass123', confirmPassword: 'pass123' });
    component.onSubmit();
    expect(component.passwordMismatch).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  // New tests to improve coverage:

  it('should handle empty password and confirmPassword fields', () => {
    component.registerForm.setValue({ password: '', confirmPassword: '' });
    component.onSubmit();
    expect(component.passwordMismatch).toBeFalse(); // They match (both empty)
    expect(routerSpy.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('should handle null password and confirmPassword values', () => {
    component.registerForm.setValue({ password: null as any, confirmPassword: null as any });
    component.onSubmit();
    expect(component.passwordMismatch).toBeFalse(); // null equals null
    expect(routerSpy.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('should reset passwordMismatch when form is submitted multiple times', () => {
    component.passwordMismatch = true;
    component.registerForm.setValue({ password: 'abc', confirmPassword: 'abc' });
    component.onSubmit();
    expect(component.passwordMismatch).toBeFalse();
  });
});