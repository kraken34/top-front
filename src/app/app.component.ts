import { Component } from '@angular/core';
import { Collegue, Avis, Vote } from './models';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues-front';

  collegueChat:Collegue = new Collegue("http://www.vetopedia.fr/wp-content/uploads/2017/06/chat_surpris-300x200.jpg", "Jacques", 1000);
  
  collegueTab:Collegue[] = [new Collegue("https://www.gravatar.com/avatar/cea55c170319848fc1acff1484825998/?s=256&r=g&d=https%3A%2F%2Fopenclassrooms.com%2Fbundles%2Fcommon%2Fimages%2Favatar_defaut.png", "Michel", 90),
                            new Collegue("https://www.gravatar.com/avatar/cea55c170319848fc1acff1484825998/?s=256&r=g&d=https%3A%2F%2Fopenclassrooms.com%2Fbundles%2Fcommon%2Fimages%2Favatar_defaut.png","Gerard", 10),
                            new Collegue("https://www.gravatar.com/avatar/cea55c170319848fc1acff1484825998/?s=256&r=g&d=https%3A%2F%2Fopenclassrooms.com%2Fbundles%2Fcommon%2Fimages%2Favatar_defaut.png", "Gregory", 92),
                            new Collegue("https://www.gravatar.com/avatar/cea55c170319848fc1acff1484825998/?s=256&r=g&d=https%3A%2F%2Fopenclassrooms.com%2Fbundles%2Fcommon%2Fimages%2Favatar_defaut.png", "Sebastien", 40)
  ]


  votesTab:Vote[] = [ new Vote(this.collegueTab[0], Avis.DETESTER),
                      new Vote(this.collegueTab[1], Avis.AIMER),
  ] 

}
