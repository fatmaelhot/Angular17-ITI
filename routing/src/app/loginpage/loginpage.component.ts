import { Component,NgModule,OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators,FormControl} from '@angular/forms';
import { RouterLink,Router, RouterLinkActive } from '@angular/router';
import { Interface } from '../interface';
import { AbstractControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
