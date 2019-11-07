import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './customer.component';
import { CustomerNewComponent } from './customer.new/customer.new.component';


const routes: Routes = [
    { path: '', component: CustomerComponent },
    {path: 'new', component: CustomerNewComponent}   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {}
