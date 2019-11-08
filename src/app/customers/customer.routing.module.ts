import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CustomerNewComponent } from './customer.new/customer.new.component';
import { CustomerListComponent } from './cutsomer.list/customer.list.component';

const routes: Routes = [    
    { path: 'new', component: CustomerNewComponent},    
    { path: '**', component: CustomerListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {}
