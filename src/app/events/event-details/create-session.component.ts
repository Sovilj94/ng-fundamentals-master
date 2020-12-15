import { Component } from "@angular/core";
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared/event.model';
import { restrictedWords } from '../shared/restricted-words.validator';

@Component({
    templateUrl:"create-session.component.html",
    styles: [`
    em {float:right; color: #E05C65; padding-left: 10px }
    .error input {background-color: #E3C3C5}
    .error ::-webkit-input-placeholder { color: #999}
    .error ::-moz-placeholder { color: #999}
    .error :-moz-input-placeholder { color: #999}
    .error :-ms-input-placeholder { color: #999}
`]
})

export class CreateSessionComponent{
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    session: ISession;

        ngOnInit(){

            this.name = new FormControl('',Validators.required);
            this.presenter = new FormControl('',Validators.required);  
            this.duration = new FormControl('',Validators.required);
            this.level = new FormControl('',Validators.required);
            this.abstract = new FormControl('',[Validators.required, Validators.maxLength(20),restrictedWords(['foo','bar'])]);

            this.newSessionForm= new FormGroup({
                name: this.name,
                presenter: this.presenter,
                duration: this.duration,
                level: this.level,
                abstract: this.abstract
            });

        }

    saveSession(formValues){

        this.session ={
            id: undefined,
            name : formValues.name,
            presenter : formValues.presenter,
            duration : +formValues.duration,
            level : formValues.level,
            abstract : formValues.abstract,
            voters: []
        }
      console.log(this.session);


    }
    
}