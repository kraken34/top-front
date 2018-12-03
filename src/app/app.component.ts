import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues-front';

  collegueChat:Collegue = new Collegue("http://www.vetopedia.fr/wp-content/uploads/2017/06/chat_surpris-300x200.jpg", "Jacques", 1000);
  
  collegueTab:Collegue[] = [new Collegue("https://www.gravatar.com/avatar/cea55c170319848fc1acff1484825998/?s=256&r=g&d=https%3A%2F%2Fopenclassrooms.com%2Fbundles%2Fcommon%2Fimages%2Favatar_defaut.png", "Michel", 2000),
                            new Collegue("https://www.santevet.com/upload/admin/images/article/Chat%202/actualit%C3%A9s/le%20chaton%20teint%20en%20rose%20d'Elena%20Lenina.jpeg","Gerard", 3000),
                            new Collegue("https://www.1jour1actu.com/wp-content/uploads/chat-vert-750x500.png", "Gregory", 5000),
                            new Collegue("https://photos.lci.fr/images/613/344/un-chat-bengal-race-rare-tres-prisee-5cc0c4-0@1x.jpeg", "Sebastien", 4500)
  ]
  
}
