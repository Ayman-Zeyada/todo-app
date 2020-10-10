import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from 'src/app/core/auth.service';
import { SpinnerService } from 'src/app/core/components/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('spinnerWrapper') spinnerWrapper: ElementRef;
  loginForm: FormGroup;
  isSubmitted = false;
  showErrorMessage: boolean;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: SpinnerService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.spinner.show(this.spinnerWrapper.nativeElement);
    this.auth
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.spinner.hide();
          this.router.navigate(['/todos']);
        },
        error: () => {
          this.spinner.hide();
          this.showErrorMessage = true;
        },
      });
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
