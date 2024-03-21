import { Component } from '@angular/core';

@Component({
  selector: 'app-st-sub-family',
  templateUrl: './st-sub-family.component.html',
  styleUrls: ['./st-sub-family.component.css']
})
export class StSubFamilyComponent {
  stateOptions: { label: string, value: string }[] = [
    { label: 'Sous famille de niveau 1', value: 'level-one' },
    { label: 'Sous famille de niveau 2', value: 'level-two' }
  ];

  activeLevel: string = 'level-one';
}
