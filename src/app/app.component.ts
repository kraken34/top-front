import { Component } from '@angular/core';
import { Collegue } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';


  collegue:Collegue = new Collegue('top-front/src/app/assets/images/collegue.jpg', 'Bibi', 1000);
  collegue2:Collegue = new Collegue('top-front/src/app/assets/images/collegue.jpg', 'Gégé', 1000);
  collegue3:Collegue = new Collegue('top-front/src/app/assets/images/collegue.jpg', 'Kiki', 1000);

}
