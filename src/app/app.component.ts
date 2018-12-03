import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues-front';

  collegueTest = new Collegue("Mario","https://www.salford.ac.uk/__data/assets/image/0008/890072/varieties/lightbox.jpg");
}
