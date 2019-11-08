import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderListComponent } from './list/order.list.component';
import { OrderNewComponent } from './new/order.new.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    { path: 'list/:id', component: OrderListComponent},
    { path: 'new', component: OrderNewComponent},
    { path: '', component: ProductComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule {}
