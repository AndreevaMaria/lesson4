import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserUpdateComponent } from './user-update/user-update.component';


const routes: Routes = [
  { path: 'auth', component: UserAuthComponent },
  { path: 'update', component: UserUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
