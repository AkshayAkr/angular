import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DisplayAllBooksComponent } from './display-all-books/display-all-books.component';
import { DisplayIndividualBookComponent } from './display-individual-book/display-individual-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DisplayAllBooksComponent, DisplayIndividualBookComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    MDBBootstrapModule
  ]
})
export class BookModule { }
