import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: 'simpleModal.component.html',
    styles: ['.modal-body {height: 250px; overflow-y: scroll};']
})

export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnClick: string;
    @ViewChild('modalcontainer') el: ElementRef;
    
    constructor(@Inject(JQ_TOKEN) private $ : any) { }

    ngOnInit() { }

    closeModal(){
            if(this.closeOnClick === 'true')
            {
                this.$(this.el.nativeElement).modal('hide');
            }
    }
}