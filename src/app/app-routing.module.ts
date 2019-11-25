import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { AuthGuardAdmin } from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path : '' , component : StartpageComponent
  },
  {
    path : 'admin',
    loadChildren : './admin/admin.module#AdminModule',
    canActivate: [AuthGuardAdmin],
    data: { preload: true }
  },
  {
    path : 'user',
    loadChildren : './user/user.module#UserModule'
  },
  {
    path : '**' , component : StartpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
