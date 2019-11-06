import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

import {ICustomer} from '../shared/customer';
import { delay } from 'q';

@Component({
    selector: 'app-customers',
    templateUrl: './customer.component.html',
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
export class CustomerComponent implements OnInit {
    title: string;
    lstCustomers: ICustomer[];
    strLstCustomers: string;
    isOpen:boolean = true;
    toogleText: string = "Hide"

    constructor() { }

    toogleCustomer(){
        this.isOpen = !this.isOpen;
        this.toogleText = this.isOpen == true? "Hide": "Show";
    }

    ngOnInit(): void { 
        this.title = "List of Customers";      
        this.lstCustomers = [
            {id: 101, name:'John Galt', city:'New York', orderTotal:132.23, customerSince: new Date(2015, 10, 15)},
            {id: 102, name:'Ken Mark', city:'Mumbai', orderTotal:150, customerSince: new Date(2018, 5, 12)},
            {id: 103, name:'Tim Knoth', city:'Hyderabad', orderTotal:187.2, customerSince: new Date(2016, 8, 25)}
        ]
    }
}
