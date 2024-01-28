import { Component,NgModule,OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators,FormControl} from '@angular/forms';
import { RouterLink,Router, RouterLinkActive } from '@angular/router';
import { Interface } from '../interface';
import { AbstractControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registerpage',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './registerpage.component.html',
  styleUrl: './registerpage.component.css'
})
export class RegisterpageComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/),
        ],
      ],
      repassword: ['', Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/),],
    }, { validators: this.passwordMatchValidator });
  }
  

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Handle registration logic here
      console.log(this.registerForm.value);
    } else {
      // Form is invalid, display error messages
      this.validateAllFormFields(this.registerForm);
    }
  }

  get name(): AbstractControl {
    return this.registerForm.get('name')!;
  }

  get email(): AbstractControl {
    return this.registerForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.registerForm.get('password')!;
  }

  get repassword(): AbstractControl {
    return this.registerForm.get('repassword')!;
  }

  passwordMatchValidator(formGroup: FormGroup): { passwordMismatch: boolean } | null {
    const password = formGroup.get('password')!.value;
    const repassword = formGroup.get('repassword')!.value;

    return password === repassword ? null : { passwordMismatch: true };
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
