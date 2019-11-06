import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { CustomerService } from './customer.service';


@NgModule({
    declarations: [],
    imports: [ HttpClientModule ],
    exports: [],
    providers: [CustomerService],
})
export class ServicesModule {}