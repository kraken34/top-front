import { Component } from '@angular/core';
import { Collegue, Vote, Avis } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  listCollegues = [new Collegue("Patrick", "https://media.giphy.com/media/eHpWHuEUxHIre/giphy.gif", 250),
  new Collegue("Bob", "https://media.giphy.com/media/DROP5YnPcJLLG/giphy.gif", 250),
  new Collegue("Garry", "https://media.giphy.com/media/9pnP2yxqjheFO/giphy.gif", 250),
  new Collegue("Cpt Krabs", "https://media.giphy.com/media/gXhBZfzijya76/giphy.gif", 250),
  new Collegue("Sandy", "https://media.giphy.com/media/l1Ku53fLq0C2KYWsg/giphy.gif", 250),
  new Collegue("Plancton", "https://media.giphy.com/media/3ohzAiVqeYVSaqoP6w/giphy.gif", 250),
  new Collegue("Carlo", "https://media.giphy.com/media/3oKHWuRz1wzaAoygZa/giphy.gif", 250),
  new Collegue("Nian", "https://media.giphy.com/media/BcZZaMtMBmakw/giphy.gif", 250),
  new Collegue("Mrs Puff", "https://media.giphy.com/media/3oKHWoYA631FfBJPuE/giphy.gif", 250)];

  listVotes = [new Vote(this.listCollegues[0], Avis.AIMER), new Vote(this.listCollegues[1], Avis.DETESTER)];
}
