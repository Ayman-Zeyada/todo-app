import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';
import { SpinnerService } from 'src/app/core/components/spinner/spinner.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('spinnerWrapper') spinnerWrapper: ElementRef;
  registerForm: FormGroup;
  isSubmitted: boolean;
  showErrorMessage: boolean;

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: SpinnerService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f(): any {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.spinner.show(this.spinnerWrapper.nativeElement);

    this.userService.signUp(this.registerForm.value)
      .subscribe(res => {
        this.auth.setCurrentUser(res);
        this.router.navigate(['/todos']);
        this.spinner.hide();
      }, (err) => {
        this.showErrorMessage = true;
        this.spinner.hide();
      });
  }
}
