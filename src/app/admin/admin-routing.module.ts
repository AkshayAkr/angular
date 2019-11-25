import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksUserComponent } from './books-user/books-user.component';
import { GetBooksComponent } from './get-books/get-books.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '' ,
    children: [
  {
    path : 'addbook' , component : AddbookComponent
  },
  {
    path : 'userbook' , component : BooksUserComponent
  },
  {
    path : 'getallbooks' , component: GetBooksComponent
  },
  {
    path : 'updatebook/:bookid', component: UpdatebookComponent
  },
  {
    path : 'admin', component: AdminComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
