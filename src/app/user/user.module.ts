import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { UserRoutingModule } from './user-routing.module';
import { MyBooksComponent } from './my-books/my-books.component';
import { ProfileComponent } from './profile/profile.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [MyBooksComponent , ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RatingModule,
    FormsModule,
    MDBBootstrapModule
  ]
})
export class UserModule { }
