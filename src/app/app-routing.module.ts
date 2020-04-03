import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'view', component: ProductViewComponent },
  { path: 'user', loadChildren: () => UserModule },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
