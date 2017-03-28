import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StevesComponent } from './steves/steves.component';
import { AboutComponent } from './about/about.component';
import { PeopleService } from './people/people.service'

import { WebApiPromiseService } from './web-api/web-api-promise.service';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'steves', component: StevesComponent },
  { path: 'about',  component: AboutComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({

    imports: [RouterModule.forRoot(appRoutes),
              BrowserModule,
              HttpModule,
              FormsModule],

    declarations: [AppComponent,
                   StevesComponent,
                   AboutComponent,
                   ],

    providers: [PeopleService,
                WebApiPromiseService],

    bootstrap: [AppComponent]

})

export class AppModule { }
