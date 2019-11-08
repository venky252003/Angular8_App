import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { CustomerService } from './customer.service';
import { OrderService } from './order.service';
import { UserService } from './user.service';


@NgModule({
    declarations: [],
    imports: [ HttpClientModule ],
    exports: [],
    providers: [CustomerService, OrderService, UserService],
})
export class ServicesModule {}