import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'about',
  template: `About Page
             <br>
             <span *ngIf="firstName">Hello {{ firstName }}</span>
             <br>
             <child-component [passedFirstName]='firstName'></child-component>`,
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
}
