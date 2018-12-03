import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  collegueExemple: Collegue = new Collegue('thomas', 10,
  ['./assets/tomme.jpg',
    './assets/giphy.gif']);
}
