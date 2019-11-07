import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './cutsomer.list/customer.list.component';
import { SharedModule } from '../shared/shared.module';
import { FiliterTextComponent } from './cutsomer.list/filiter.component';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CustomerRoutingModule } from './customer.routing.module';


@NgModule({
    declarations: [CustomerComponent,CustomerListComponent, FiliterTextComponent],
    imports: [ CommonModule,SharedModule, FormsModule, CustomerRoutingModule],
    exports: [CustomerComponent,CustomerListComponent, FiliterTextComponent],
    providers: [CustomerService],
})
export class CustomerModule {}