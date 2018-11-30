import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  objCollegue = new Collegue("https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg", "SUPERPSEUDO", 120)
}
