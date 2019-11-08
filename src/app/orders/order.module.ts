import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderComponent } from './order.component';
import { OrderService } from '../services/order.service';
import { OrderRoutingModule } from './order.routing.module';
import { OrderNewComponent } from './new/order.new.component';
import { ProductComponent } from './product/product.component';
import { OrderListComponent } from './list/order.list.component';
import { AuthorizeGuard } from '../services/authorzie.guard';


@NgModule({
    declarations: [OrderComponent, OrderNewComponent, ProductComponent, OrderListComponent],
    imports: [ CommonModule, OrderRoutingModule,FormsModule, ReactiveFormsModule  ],
    exports: [OrderNewComponent, ProductComponent, OrderListComponent],
    providers: [OrderService, AuthorizeGuard],
})
export class OrdersModule {}