import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  template: `<section class="sample-app-content">
                <h1>Model-based Form Example:</h1>
                <form [formGroup]="form" (ngSubmit)="onSubmitModelBased()">
                    <p>
                        <label>First Name:</label>
                        <input type="text" formControlName="firstName">
                    </p>
                    <p>
                        <label>Password:</label>
                        <input type="password" formControlName="password">
                    </p>

                    <p>
                        <button type="submit" [disabled]="!form.valid">Submit</button>
                        <button type="button" (click)="partialUpdate()">Partial Update</button>
                        <button type="button" (click)="fullUpdate()">Full Update</button>
                        <button type="button" (click)="reset()">Cancel</button>
                    </p>

                </form>
            </section>`
})

export class FormTestComponent {
  
  router: Router;
  form: FormGroup;
    
  firstName = new FormControl("", Validators.required);

  constructor(fb: FormBuilder, rt: Router) {
    this.form = fb.group({
        "firstName": this.firstName,
        "password":["", Validators.required]
    });
    this.router = rt;
  }
 
  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);

    //this.router.navigateByUrl ("/about?name=" + this.firstName.value);
    this.router.navigate (["/about"], { queryParams: { "firstName": this.firstName.value } });
  }

  fullUpdate() {
    this.form.patchValue({firstName: 'Partial', password: 'monkey'});   
  }

  partialUpdate() {
    this.form.patchValue({firstName: 'Partial'});
  }

  reset() {
    this.form.reset();
  }
}