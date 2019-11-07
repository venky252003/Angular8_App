import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './customer.component';


const routes: Routes = [
    { path: '', component: CustomerComponent }   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {}
