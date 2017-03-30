import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'about',
  template: `About Page
             <br>
             <div *ngIf="firstName">Hello {{ firstName }}</div>
             <div *ngIf="childFruit">You like : {{ childFruit }}</div>
             <br>
             <child-component [passedFirstName]='firstName'
                              (notifyParent)='getNotification($event)'></child-component>`,
})

export class AboutComponent {

  router: ActivatedRoute;

  name = 'About Component';
  firstName: String;
 
  constructor (rt: ActivatedRoute) {
    this.router = rt;
  };

  ngOnInit() {
    this.router
        .queryParams
        .subscribe(params => {
            this.firstName = params['firstName'];
        });
  }

  getNotification (evt: string) {
    console.log('Got an event from the child!! -', evt);
  }
}
