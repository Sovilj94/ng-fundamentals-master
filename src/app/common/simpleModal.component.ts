import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'simple-modal',
    templateUrl: 'simpleModal.component.html',
    styles: ['.modal-body {height: 250px; overflow-y: scroll};']
})

export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    
    constructor() { }

    ngOnInit() { }
}