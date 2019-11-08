import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent  } from "./contact/contact.component";

const routes: Routes = [    
    { path: 'customers',  loadChildren: () => import(`./customers/customer.module`).then(mod => mod.CustomerModule)},    
    { path: 'orders', loadChildren: () => import(`./orders/order.module`).then(mod => mod.OrdersModule) },
    { path: 'about', component: AboutComponent },    
    { path: 'contact', component: ContactComponent },
    { path: '*',   redirectTo: '/customers', pathMatch: 'full' },
    { path: '', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

