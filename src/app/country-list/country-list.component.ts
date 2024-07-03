import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [],
  template: `
    <h2 class = 'custom'>
      country-list works!
    </h2>
  `,
  styles: [
    `.custom{color:yellow}`
  ]
})
export class CountryListComponent {

}
