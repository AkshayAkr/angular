import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayIndividualBookComponent } from './display-individual-book/display-individual-book.component';
import { DisplayAllBooksComponent } from './display-all-books/display-all-books.component';

const routes: Routes = [
  {
    path : 'disp' , component: DisplayAllBooksComponent
  },
  {
    path: 'disp/:bookid' , component: DisplayIndividualBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
