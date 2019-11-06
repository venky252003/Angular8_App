import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';

const routes: Routes = [
    { path: 'customers',  loadChildren: () => import('./customers/customer.module').then(mod => mod.CustomerModule)},    
    { path: 'products', loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule) },
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule) },
    { path: '',   redirectTo: '/customers', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

