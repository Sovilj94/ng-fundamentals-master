import { templateJitUrl } from '@angular/compiler';
import { Component } from "@angular/core";
import { ISession } from 'src/app/events/shared/event.model';
import { EventService } from 'src/app/events/shared/event.service';
import { AuthService } from 'src/app/user/auth.service';
import { EventEmitter } from '@angular/core';
import { Observable} from 'rxjs';



@Component({
    selector:'nav-bar',
    templateUrl:'./nav-bar.component.html',
    styles:[`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924;}
    `]

})

export class NavBarComponenet{

    searchTerm : string="";
    foundSessions : ISession [];


    constructor(public authService: AuthService, private eventService: EventService) {
        
 
    }

    searchSessions(searchTerm){
 
      this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        });

        
    }
}
