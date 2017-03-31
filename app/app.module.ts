import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StevesComponent } from './steves/steves.component';
import { AboutComponent } from './about/about.component';
import { FormTestComponent } from './formtest/formtest.component';
import { ChildComponent } from './child/child.component';

import { PeopleService } from './people/people.service'
import { WebApiPromiseService } from './web-api/web-api-promise.service';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DatepickerModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

const appRoutes: Routes = [
  { path: 'steves', component: StevesComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'formtest',  component: FormTestComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({

    imports: [RouterModule.forRoot(appRoutes),
              BrowserModule,
              HttpModule,
              FormsModule,
              ReactiveFormsModule,
              AlertModule.forRoot()],

    declarations: [AppComponent,
                   StevesComponent,
                   AboutComponent,
                   FormTestComponent,
                   ChildComponent,
                   ],

    providers: [PeopleService,
                WebApiPromiseService],

    bootstrap: [AppComponent]

})

export class AppModule { }
