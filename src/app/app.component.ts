import { Component, Input } from '@angular/core';
import { Collegue, Vote, Avis } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';


  tabCollegues:Collegue[] = [new Collegue('https://media.giphy.com/media/M7oKkaur56EFO/giphy.gif', 'Bibi', 0),
                                      new Collegue('https://media.giphy.com/media/M7oKkaur56EFO/giphy.gif', 'Kiki', 0),
                                      new Collegue('https://media.giphy.com/media/M7oKkaur56EFO/giphy.gif', 'Gégé', 0) 
  ];


  tabVotes:Vote[] = [
    new Vote(this.tabCollegues[0], Avis.AIMER),
    new Vote(this.tabCollegues[1], Avis.DESTESTER),
    new Vote(this.tabCollegues[2], Avis.AIMER)
  ]

}
