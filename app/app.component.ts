import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular Router Example</h1>
  <nav>
    <a routerLink="/" routerLinkActive="active">Home</a>
    <a routerLink="/steves" routerLinkActive="active">Steves</a>
    <a routerLink="/about" routerLinkActive="active">About</a>
    <a routerLink="/formtest" routerLinkActive="active">FormTest</a>
  </nav>
  <router-outlet></router-outlet>`,
})
export class AppComponent { name = 'Angular'; }
