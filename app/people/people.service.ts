import { Injectable } from '@angular/core';
import { Person } from './person';
import { User } from './user';

import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const PEOPLE : Person[] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70, profession: ''},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100, profession: ''},
      {id: 3, name: 'Han Solo', height: 185, weight: 85, profession: ''},
      {id: 4, name: 'Steve Davis', height: 185, weight: 85, profession: ''},
    ];

@Injectable()
export class PeopleService{

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';  // URL to web api
  _http: Http;
  result: User[] = [];

  constructor(private http: Http) {
    console.log ('http ', http, this.usersUrl);
    this._http = http;
  }

  getUsers() : User[] {
    console.log ('calling getUsers');
    let users = this._http.get(this.usersUrl).map((response) => response.json())
      .subscribe ((data) => {  this.result = data; console.log ("It is ... ",this.result);});

    return this.result;
  }

  getAll() : Person[] {
    let users = this.getUsers ();
    console.log ("After call : ", users);
    return PEOPLE.map(p => this.clone(p));
  }

  get(id: number) : Person {
    return this.clone(PEOPLE.find(p => p.id === id));
  }
  
  save(person: Person){
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);
    // saved muahahaha
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}
