import { Component } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { last } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
        templateUrl:'profile.component.html'
})

export class ProfileComponent { 
    profileForm : FormGroup;


    constructor(private authService: AuthService) {
      
    }

      ngOnInit(){

          let firstName = new FormControl(this.authService.currentUser.firstName);
          let lastName = new FormControl(this.authService.currentUser.lastName);

          this.profileForm = new FormGroup({
                firstName: firstName,
                lastName: lastName
          });
      }


}