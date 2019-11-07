import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './cutsomer.list/customer.list.component';
import { SharedModule } from '../shared/shared.module';
import { FiliterTextComponent } from './cutsomer.list/filiter.component';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CustomerRoutingModule } from './customer.routing.module';
import { CustomerNewComponent } from './customer.new/customer.new.component';
import { OrderComponent } from './orders/order.component';


@NgModule({
    declarations: [CustomerComponent,CustomerListComponent, FiliterTextComponent, CustomerNewComponent, OrderComponent],
    imports: [ CommonModule,SharedModule, FormsModule, CustomerRoutingModule],
    exports: [CustomerComponent,CustomerListComponent, FiliterTextComponent, CustomerNewComponent, OrderComponent],
    providers: [CustomerService],
})
export class CustomerModule {}