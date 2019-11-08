import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `   
    <a [routerLink]="'/customers'" [routerLinkActive]="'active'">Customer</a>
    <a [routerLink]="'/orders'" [routerLinkActive]="'active'">Orders</a>
    <a [routerLink]="'/about'" [routerLinkActive]="'active'">About Us</a>
    <a [routerLink]="'/contact'" [routerLinkActive]="'active'">Contact Us</a>              
    `,
    styles: []
})
export class MenuComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
