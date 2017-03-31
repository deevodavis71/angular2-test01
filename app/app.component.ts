import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular Router Example</h1>

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul class="nav navbar-nav">
        <li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}"><a [routerLink]="['/']">Home</a></li>
        <li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}"><a [routerLink]="['/steves']">Steves</a></li>
        <li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}"><a [routerLink]="['/about']">About</a></li>
        <li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}"><a [routerLink]="['/formtest']">FormTest</a></li>
      </ul>
    </div>
  </nav>

  <div class="alert alert-success alert-dismissable fade in">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Success!</strong> This alert box could indicate a successful or positive action.
  </div>

  <router-outlet></router-outlet>`,
})
export class AppComponent { name = 'Angular'; }
