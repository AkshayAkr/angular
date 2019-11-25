import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormBuilder , FormControl , Validators } from '@angular/forms';
import { UserserviceService } from '../service/userservice.service';
import { UserDetails } from '../../UserDetails';
import { Users } from '../../Users';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder , private userService: UserserviceService , private route: Router) { }
  signUpForm: FormGroup;
  patternPassword: '[a-z]';
  category: any[] = [];
  allUsers: Users[] = [];
  user: UserDetails = {name : '', password : '', email : '' , noofbooks : 0 , allBooks : [], bookid : [], categories : [],
   comments: [] , oldBookDetails : []};
  ngOnInit() {
    this.signUpForm = this.fb.group({
    email: ['', [Validators.required , Validators.email]],
    password: ['' , [Validators.required , Validators.minLength(8)]],
    name: ['', [Validators.required , Validators.pattern('[A-Za-z]{2,20}')]],
    });
    this.userService.getAllUsers().subscribe(data => {
      this.allUsers = data;
    });
  }
  get email() {
     return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get name() { return this.signUpForm.get('name'); }

async check() {
  let flag = 0;
  this.allUsers.map(data => {
    if (data.email === this.signUpForm.value.email) {
      flag = 1;
      setTimeout(() => {
        Swal.fire('email id already exists, Kindly Login' , '' , 'warning');
        this.route.navigate(['/login']);
      }, 1000);
    }
  });
  if (flag === 0) {
  this.user.allBooks = [];
  this.user.bookid = [];
  this.user.noofbooks = 0;
  this.user.name = this.signUpForm.value.name;
  this.user.password = this.signUpForm.value.password;
  this.user.email = this.signUpForm.value.email;
  this.user.categories = this.category;
  this.user.comments = [];
  this.user.oldBookDetails = [];
await this.userService.addUser(this.user).subscribe();
  setTimeout(() => {
    Swal.fire('Account added successfully, Kindly Login');
    this.route.navigate(['/login']);
  }, 1000);

}
}
filterdata(e: any) {
  const selected = [...this.category];
  if (e.checked) {
    const value = e.element.value;
    selected.push(value);
  } else {
    for (let i = 0 ; i < selected.length; i++) {
      if ( selected[i] === e.element.value) {
          selected.splice(i, 1);
      }
    }
   }
  this.category = selected;
  }
}
