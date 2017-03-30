import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `The Child Component!!! firstName = {{ passedFirstName }}`,
})

export class ChildComponent {
    @Input() passedFirstName: string;
}
