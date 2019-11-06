import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-list-filiter',
    template: `
        Filter : <input type='text' [(ngModel)]='filiter'/>
    `
})
export class FiliterTextComponent implements OnInit {
    private _filiter:string = "";

    @Input() get filiter(){
        return this._filiter;
    }
    set filiter(val:string){
        this._filiter = val;
        this.changed.emit(val);
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void { }
}
