import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetBooksComponent } from './get-books/get-books.component';
import { BooksUserComponent } from './books-user/books-user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [AddbookComponent, UpdatebookComponent, BooksUserComponent, GetBooksComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule
  ]
})
export class AdminModule { }
