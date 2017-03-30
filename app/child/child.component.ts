import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `The Child Component!!! firstName = {{ passedFirstName }}
             <br>
             <input type="text" [(ngModel)]="fruit">
             <button type="button" (click)="saveFruit ()">Save Fruit</button>`,
})

export class ChildComponent {
    @Input() passedFirstName: string;
    @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

    fruit: String;

    saveFruit () {
        console.log("Fruit", this.fruit);
        this.notifyParent.emit ('Hey there -' + this.fruit);
    }
}
