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
  tabCollegue = [new Collegue("https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg", "SUPERPSEUDO", 120),
  new Collegue("https://www.gettyimages.fr/gi-resources/images/Embed/new/embed2.jpg", "Collegue_1", 140),
  new Collegue("https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg", "Collegue_2", 180),
  new Collegue("https://wallpaperbrowse.com/media/images/BMW-4-series-gran-coupe-images-and-videos-1920x1200-04.jpg.asset.1487328216285.jpg", "Collegue_3", 150)

  ]
}
