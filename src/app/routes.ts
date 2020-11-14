import {Routes} from '@angular/router';
import { EventListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { ProfileComponent } from './user/profile.component';
import { LoginComponent } from './user/login.component';


export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventListComponent, resolve: {events: EventListResolver}},
    { path: 'events/:id', component: EventDetailsComponent,  canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent}
]