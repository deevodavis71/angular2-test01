import { User } from '../people/user';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Person } from '../people/person';
import { PeopleService } from '../people/people.service';

import { WebApiPromiseService } from '../web-api/web-api-promise.service';

@Component({
  selector: 'steves-app',
  template: `Steves Page - {{ name }}
            <ul>
              <li *ngFor="let j of jedis;let i='index'" (click)="deleteJedi(i)">
                Jedi : {{ j.name }}
              </li>
            </ul>
            <br>
            <input placeholder="new jedi name" type="text" [(ngModel)]="newJedi">
            <button (click)="saveNewJedi()">Save New</button>
            <br>
            <ul>
              <li *ngFor="let u of users">
                Jedi : {{ u.username }}
              </li>
            </ul>            
            `,
  styles: [`li.red { color : red; }
            li.yellow { color : yellow; }`]
})

export class StevesComponent implements OnInit {

  //_peopleService : PeopleService;
  //_webApiService: WebApiPromiseService;

  name = 'Steves Component';
  newJedi : string = "";
  newJediPerson: Person;
  jedis: Person[] = [];
  users: User[] = [];

  constructor (private peopleService: PeopleService, private webApiService: WebApiPromiseService) {
    
    //this._peopleService = peopleService;
    //this._webApiService = webApiService;

    this.jedis = this.peopleService.getAll ();
  }

  ngOnInit() {
    this.webApiService.getService ('https://jsonplaceholder.typicode.com/users')
        .then (result => { 
          console.log ('result from WebApi: ', result);
          this.users = result as User[];
          console.log ('result from WebApi (users): ', this.users);
           })
        .catch (error => console.log (error));
  }

  saveNewJedi () {
    console.log ('you entered', this.newJedi);

    let newJediPerson = new Person ();
    newJediPerson.name = this.newJedi;
    this.peopleService.save (newJediPerson);

    this.jedis.push (newJediPerson);
    
    this.newJedi = '';
  }

  deleteJedi (i : number) {
    console.log('You clicked',i);
    this.jedis.splice(i, 1);
  }
}
