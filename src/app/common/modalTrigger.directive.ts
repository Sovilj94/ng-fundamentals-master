import { stringify } from '@angular/compiler/src/util';
import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({ selector: '[modal-trigger]' })
export class ModalTriggerDirective {

    private el:HTMLElement;
    @Input('modal-trigger') elementId: string;

    constructor(@Inject(JQ_TOKEN) private $:any, ref :ElementRef) {

        this.el = ref.nativeElement;
        
     }

    ngOnInit(){
        this.el.addEventListener('click', e=> {
            this.$(`#${this.elementId}`).modal({});
        });
    }
}