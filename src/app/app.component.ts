import { Component, Input } from '@angular/core';
import { Collegue, Avis } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  collegue: Collegue = new Collegue("https://cdn-images-1.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg", "Didier", Avis, 0);
}