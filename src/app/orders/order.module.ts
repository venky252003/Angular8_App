import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderService } from '../services/order.service';
import { OrderRoutingModule } from './order.routing.module';
import { OrderNewComponent } from './new/order.new.component';
import { ProductComponent } from './product/product.component';
import { OrderListComponent } from './list/order.list.component';

@NgModule({
    declarations: [OrderComponent, OrderNewComponent, ProductComponent, OrderListComponent],
    imports: [ CommonModule, OrderRoutingModule ],
    exports: [OrderNewComponent, ProductComponent, OrderListComponent],
    providers: [OrderService],
})
export class OrdersModule {}