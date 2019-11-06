import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { ICustomer } from 'src/app/shared/customer';


@Component({
    selector: 'customer-list',
    templateUrl: './customer.list.component.html',
    animations: [
        trigger('pageAnimations', [
          transition(':enter', [
            query('.hero, form', [
              style({opacity: 0, transform: 'translateY(-100px)'}),
              stagger(-30, [
                animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
              ])
            ])
          ])
        ]),
        trigger('filterAnimation', [
          transition(':enter, * => 0, * => -1', []),
          transition(':increment', [
            query(':enter', [
              style({ opacity: 0, width: '0px' }),
              stagger(50, [
                animate('300ms ease-out', style({ opacity: 1, width: '*' })),
              ]),
            ], { optional: true })
          ]),
          transition(':decrement', [
            query(':leave', [
              stagger(50, [
                animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
              ]),
            ])
          ]),
        ]),
      ]   
})
export class CustomerListComponent implements OnInit {
    @HostBinding('@pageAnimations')
    public animatePage = true;

    private _customers:ICustomer[] = [];
    @Input('customers') get customers():ICustomer[]{
        return this._customers;
    }
    set customers(value:ICustomer[]){
        this._customers = value;
        if(value != null){
          /*  let amount = value.reduce(
                    (total, newval) => 
                        { return total.orderTotal + newval.orderTotal;}
                    );*/
        }
    }

    filtertedCustomers: ICustomer[];
    customersOrderTotal: number = 0;
    isAscendingSort: boolean = true;
    keyword: string = "";
    
    constructor() { }

    saveList(){
        if(this.keyword){
            localStorage.setItem(this.keyword,JSON.stringify(this.filtertedCustomers))
        }
    }

    loadSavedList(){
        if(localStorage.getItem(this.keyword)){
            const strCachedDate: string = localStorage.getItem(this.keyword);
            this.filtertedCustomers = JSON.parse(strCachedDate);
        }
    }

    calcualteOrderTotal(){
        this.customersOrderTotal = 0;
        this.filtertedCustomers.forEach((cust:ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        })
    }

    sortCustomers(columnName: string){
        if(this.isAscendingSort)
            this.filtertedCustomers.sort((a:any, b:any) => a[columnName] > b[columnName] ? 1 : -1);
        else
            this.filtertedCustomers.sort((a:any, b:any) => a[columnName] < b[columnName] ? 1 : -1);

        this.isAscendingSort = !this.isAscendingSort;
    }

    applyFilter(data: string){
        if(data){
            this.filtertedCustomers = this.filtertedCustomers.filter((cust:ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 || 
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 || 
                       cust.id.toString().indexOf(data.toLowerCase()) > -1 ||
                       cust.customerSince.toString().indexOf(data.toLowerCase()) > -1 ||
                       cust.orderTotal.toString().indexOf(data.toLowerCase()) > -1
            })
        }
        else{
            this.filtertedCustomers = this.customers;
        }
        this.calcualteOrderTotal();
    }

    ngOnInit(): void {     
        this.filtertedCustomers = this.customers;
        this.calcualteOrderTotal();
    }
}
