import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.componenet';
import { NavBarComponenet } from 'src/nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { ProfileComponent } from './user/profile.component';
import { LoginComponent } from './user/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { SimpleModalComponent } from './common/simpleModal.component';
import { JQ_TOKEN } from './common/jQuery.service';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { VoterService } from './events/event-details/voter.service';


let toastr: Toastr = window['toastr'];
let jQuery = window['$'];


@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponenet,
    CreateEventComponent,
    Error404Component,
    ProfileComponent,
    LoginComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
     EventService,
     {provide: TOASTR_TOKEN, useValue: toastr},
     {provide: JQ_TOKEN, useValue: jQuery},
     EventRouteActivator,
     EventListResolver,
     AuthService,
     VoterService,
     {
       provide: 'canDeactivateCreateEvent',
       useValue: checkDirtyState
     }
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel!?');

  return true;
}
