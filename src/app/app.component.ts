import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues-front';

  collegueMario:Collegue = new Collegue("Mario","https://www.salford.ac.uk/__data/assets/image/0008/890072/varieties/lightbox.jpg");

  listeColleguesExemple:Collegue[] = [
    this.collegueMario,
    new Collegue("Chris Sharma","https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimage2.redbull.com%2Frbcom%2F010%2F2015-04-09%2F1331716034694_2%2F0010%2F1%2F1500%2F1000%2F2%2Fchris-sharma-makes-the-first-ascent-of-el-bon-combat-near-barcelona-spain.jpg&f=1"),
    new Collegue("Maja Vidmar","https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffr.belclimb.be%2Fuploads%2Fmaya-vidmar02.jpg&f=1"),
    new Collegue("Seb Bouin","https://www.matahijuice.com/wp-content/uploads/2017/10/seb-bouin-matahi.jpg"),
    new Collegue("Sasha Digiulian","https://www.grimper.com/media/news/janvier%202014/sasha.jpg"),
    new Collegue("Dave Graham", "https://c1.staticflickr.com/7/6125/5958326452_4f80086fa2_b.jpg"),
    new Collegue("The one", "http://blog.roddet.com/images/photo.jpeg"),
    new Collegue("Nina Caprez", "https://images.arcteryx.com/athletes/large/NinaCaprez_Oliana_5.jpg"),
    new Collegue("Adam Ondra","https://planetgrimpe.com/wp-content/uploads/2017/09/capture-decran-2017-09-18-a-22_fotor.png")
  ]
}
