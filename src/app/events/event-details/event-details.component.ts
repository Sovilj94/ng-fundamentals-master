import { Component } from "@angular/core";
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';


@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left:20px; padding-right:20px;}
        .event-image { height: 100px;}
        a {cursor:pointer}
    `]
})
export class EventDetailsComponent {
    event: IEvent;
    addMode:boolean;
    filterBy: string = 'all';
    sortBy: string = 'voters';

    

    constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router){

    }

    addSession(){
        this.addMode = true;
    }

    ngOnInit(){

        this.route.params.forEach((params:Params) => {
            this.event = this.eventService.getEvent(+params['id']);
            this.addMode = false;
        });

    }

    saveNewSession(session:ISession){

        let nextId = Math.max.apply(null,this.event.sessions.map(s => s.id));

        session.id = nextId +1;

        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession(){
        this.addMode = false;
    }


}