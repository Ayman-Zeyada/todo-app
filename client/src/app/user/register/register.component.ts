import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';
import { UserPayload } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted: boolean;

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
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

    this.userService.signUp(this.registerForm.value)
      .subscribe(res => {
        this.auth.setCurrentUser(res);
        this.router.navigate(['/todos']);
      });
  }
}
