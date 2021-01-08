import { ISession } from "../shared/event.model";
import { VoterService } from "./voter.service"


describe('VotersService', ()=>{
    let votersService: VoterService;
    
    beforeEach(()=>{
        votersService = new VoterService();
    });

    describe('deleteVoter',()=> {
        it('should remove the voter from the list', ()=>{
            var session = {id:6, voters: ['joe','jhon']};

            votersService.deleteVoter(<ISession>session,'joe');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('jhon');
        })
    })
})