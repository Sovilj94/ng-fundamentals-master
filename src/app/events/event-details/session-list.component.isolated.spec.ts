import { ISession } from "../shared/event.model";
import { SessionListComponent } from "./session-list.component";


describe('SessionListComponent',() =>{
    let component: SessionListComponent;
    let authService,voterService;

    beforeEach(()=>{
        component = new SessionListComponent(authService,voterService);
    });

    describe('onChange',()=>{
        
        it('should filter the sessions correctly', ()=>{
            component.sessions = <ISession[]>[{name:'session1',level:'intermediate'},
            {name:'session2',level:'intermediate'},
            {name:'session3',level:'advanced'}];

            component.filterBy = 'intermediate';
            component.sortBy = 'name';

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(2);

            
        });

        it('should sort the sessions correctly', ()=>{
            component.sessions = <ISession[]>[{name:'session 1',voters:['jhon','jhin']},
            {name:'session 3',voters:['jhon']},
            {name:'session 2',voters: ['jhon','jhin','hin']}];

            component.filterBy = 'all';
            component.sortBy = 'name';

            component.ngOnChanges();

            expect(component.visibleSessions[2].name).toBe('session 3');

            
        })
    })
});