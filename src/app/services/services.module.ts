import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { CustomerService } from './customer.service';
import { OrderService } from './order.service';


@NgModule({
    declarations: [],
    imports: [ HttpClientModule ],
    exports: [],
    providers: [CustomerService, OrderService],
})
export class ServicesModule {}