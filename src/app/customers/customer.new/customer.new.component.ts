import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services';
import { ICustomer } from 'src/app/shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-customer.new',
    templateUrl: './customer.new.component.html'
})
export class CustomerNewComponent implements OnInit {
    customerForm: FormGroup;
    //customer:ICustomer = {city: '', name: '', customerSince: null, id: 0, orderTotal: 0};

    constructor(private service: CustomerService, private builder: FormBuilder) { }

    ngOnInit(): void { 
        this.customerForm = this.builder.group({
            id: [0],
            customerSince: ['', Validators.required],
            name: ['', Validators.required],
            city: ['', Validators.required],
            orderTotal: [0]
        });
    }

    Save(){
        if(this.customerForm.invalid){
            console.log('Invaild Customer form');
        }else{
            this.service.saveCustomer(this.customerForm.value).subscribe(data => {
                console.log('Customer Saved')
            }, error => {
                console.log('Error Occured ' + error);
            })
        }       
    }
}
