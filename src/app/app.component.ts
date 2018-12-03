import { Component } from '@angular/core';
import { Avis, Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  // collegue: Collegue = new Collegue("https://cdn-images-1.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg", "Didier", Avis, 0);

  listeCollegues:Collegue[] = [
    new Collegue("https://cdn-images-1.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg", "Didier", Avis, 0),
    new Collegue("https://media2.giphy.com/media/9GIS2TZzxGiL5VWHQy/200w.webp?cid=3640f6095c05338c50516d3551e2cfb3", "Henris", Avis, 0),
    new Collegue("https://cdn-images-1.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg", "Didier", Avis, 0),
    new Collegue("https://media2.giphy.com/media/9GIS2TZzxGiL5VWHQy/200w.webp?cid=3640f6095c05338c50516d3551e2cfb3", "Henris", Avis, 0),
    new Collegue("https://cdn-images-1.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg", "Didier", Avis, 0),
    new Collegue("https://media2.giphy.com/media/9GIS2TZzxGiL5VWHQy/200w.webp?cid=3640f6095c05338c50516d3551e2cfb3", "Henris", Avis, 0)
  ];
}