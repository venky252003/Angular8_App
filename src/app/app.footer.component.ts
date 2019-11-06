import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class FooterComponent implements OnInit {    
    Name: string = "www.venky.com"
    constructor() { }

    ngOnInit(): void { }
}
