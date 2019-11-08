import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderListComponent } from './list/order.list.component';
import { OrderNewComponent } from './new/order.new.component';
import { ProductComponent } from './product/product.component';
import { AuthorizeGuard } from '../services/authorzie.guard';

const routes: Routes = [
    { path: 'list/:id', component: OrderListComponent},
    { path: 'new/:id', component: OrderNewComponent},
    { path: '', component: ProductComponent, canActivate: [AuthorizeGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule {}
