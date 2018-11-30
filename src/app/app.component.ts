import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  collegue = new Collegue("Patrick", "https://media.giphy.com/media/eHpWHuEUxHIre/giphy.gif", 250);
}
