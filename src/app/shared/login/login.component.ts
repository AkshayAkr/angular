import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { UserserviceService } from '../service/userservice.service';
import { Users } from 'src/app/Users';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string;
  users: Users[] = [];
  constructor(
    private fb: FormBuilder,
    private userService: UserserviceService,
    private authService: AuthService,
    private route: Router
  ) {}
  loginForm: FormGroup;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  onSubmit() {
    let flag = 0;
    let flag1 = 0;
    this.users.map(data => {
      if (data.email === this.loginForm.value.email) {
        flag1 = 1;
        if (data.password === this.loginForm.value.password) {
          flag = 1;
          localStorage.setItem('logins', 'Yes');
          localStorage.setItem('userid', data.id.toString());
          this.authService.login();
          Swal.fire('Welcome     ' + data.name, '', 'success');
          if (data.id === 1) {
            this.route.navigate(['/admin/admin']);
          } else {
            this.route.navigate(['/disp']);
          }
        }
      }
    });
    if (flag1 === 1 && flag === 0) {
      Swal.fire('invalid password', '', 'warning');
    }
    if (flag1 === 0) {
      Swal.fire('Email id doesnot exist . Kindly signup', '', 'warning');
    }
  }
}
