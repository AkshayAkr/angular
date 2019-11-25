import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { AuthGuardUser } from '../shared/auth/auth.guard';

const routes: Routes = [
  {
    path : '' ,
    canActivate: [AuthGuardUser],
    children : [
      {
        path : 'profile' , component: ProfileComponent
      },
      {
        path : 'mybooks', component: MyBooksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
