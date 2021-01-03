import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'upvote',
    templateUrl: 'upvote.component.html' 
})

export class UpvoteComponent implements OnInit {
    
    @Input() count: number;
    @Input() voted: boolean;
    @Output() vote  = new EventEmitter();
    
    constructor() { }

    ngOnInit() { }

    onClick(){
        this.vote.emit({});
    }
}