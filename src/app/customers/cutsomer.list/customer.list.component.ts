import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

import {ICustomer} from '../../shared';
import { CustomerService } from '../../services';


@Component({
    selector: 'app-customer-list',
    templateUrl: './customer.list.component.html',
    animations: [
        trigger('shrinkOut', [
            state('in', style({ height: '*' })),
            transition('* => void', [
              style({ height: '*', opacity: 0.5 }),
              animate(550, style({ height: 0 }))
            ]),
            transition('void => *', [
                style({ height: 0, opacity: 1 }),                
                animate(550, style({ height: '*' }))
              ])
          ])]
})
export class CustomerListComponent implements OnInit {
    title: string;
    lstCustomers: ICustomer[];
    strLstCustomers: string;
    isOpen:boolean = true;
    toogleText: string = "Hide";
    service:CustomerService;

    constructor(service:CustomerService) {
        this.service = service;
     }

    toogleCustomer(){
        this.isOpen = !this.isOpen;
        this.toogleText = this.isOpen == true? "Hide": "Show";
    }

    ngOnInit(): void { 
        this.title = "List of Customers";      
        
        this.service.getAllCustomer().subscribe((customers: ICustomer[]) => {           
            this.lstCustomers = customers;
        }, (error: any) => {
            console.log('Error Occured Customer Get All : ', error)
        });
    }
}
