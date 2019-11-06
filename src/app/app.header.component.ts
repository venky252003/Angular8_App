import { Component, OnInit, HostBinding } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
  } from '@angular/animations';

@Component({
    selector: 'app-header',
    templateUrl: './app.header.component.html',
    animations: []
})
export class HeaderComponent implements OnInit {
    Heading:string;
    constructor() {
        this.Heading = "Angular 8 Training";
     }

    ngOnInit(): void { }
}
