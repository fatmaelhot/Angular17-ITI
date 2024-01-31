import { Component,NgModule,OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators,FormControl} from '@angular/forms';
import { RouterLink,Router, RouterLinkActive } from '@angular/router';
import { Product } from '../interfaces/product';
import { AbstractControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink ,ReactiveFormsModule,RouterLinkActive,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
       });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log(this.loginForm.value);
    } else {
      // Form is invalid, display error messages
      this.validateAllFormFields(this.loginForm);
    }
  }

  
  get email(): AbstractControl {
    return this.loginForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }

 

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control!.markAsTouched({ onlySelf: true });
      }
    });
  }


}
