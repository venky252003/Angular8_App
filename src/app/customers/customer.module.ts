import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerComponent } from './customer.component';
import { SharedModule } from '../shared/shared.module';

import { CustomerService } from '../services/customer.service';
import { CustomerRoutingModule } from './customer.routing.module';
import { CustomerNewComponent } from './customer.new/customer.new.component';
import { CustomerListComponent } from './cutsomer.list/customer.list.component';
import { FiliterTextComponent } from './cutsomer.list/filiter.component';
import { CustomerTableComponent } from './cutsomer.list/table/table.component';

@NgModule({
    declarations: [CustomerComponent,CustomerListComponent, FiliterTextComponent, CustomerNewComponent, CustomerTableComponent],
    imports: [ CommonModule,SharedModule, FormsModule, CustomerRoutingModule],
    exports: [CustomerComponent,CustomerListComponent, FiliterTextComponent, CustomerNewComponent, CustomerTableComponent ],
    providers: [CustomerService],
})
export class CustomerModule {}