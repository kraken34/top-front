import { Component } from '@angular/core';
import { Collegue } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';

  collegue: Collegue = new Collegue("https://media3.giphy.com/media/4j9XOYo6IVDK8/200w.gif?cid=3640f6095c014b58742f3734672e5218", "Bebert", 100)
}