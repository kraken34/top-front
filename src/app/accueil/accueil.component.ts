import { Component, OnInit } from '@angular/core';
import { Collegue, Vote, Avis } from '../app.model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  tabCollegues:Collegue[]
  tabvotes:Vote[]

  // Injecter mon service dans mon composant
  constructor(private cService:CollegueService) {

  }
  title = 'top-collegues-front';

  /*   tabCollegues:Collegue[] = [new Collegue('https://media.giphy.com/media/M7oKkaur56EFO/giphy.gif', 'Bibi', 0),
  new Collegue('https://media.giphy.com/media/M7oKkaur56EFO/giphy.gif', 'Kiki', 0),
  new Collegue('https://media.giphy.com/media/M7oKkaur56EFO/giphy.gif', 'Gégé', 0) 
]; */




  ngOnInit() {

    this.cService.listerCollegues().subscribe(
      collegues => this.tabCollegues = collegues
      )
  }


   tabVotes:Vote[] = [
    new Vote(new Collegue("https://media.giphy.com/media/M7oKkaur56EFO/giphy.gif", "Gigi", 0, "Bébert", "Gérard", "gegedu33@gmail.com", "27, rue des écus, 33110 Le Bouscat"), Avis.AIMER),
    new Vote(new Collegue("https://media.giphy.com/media/M7oKkaur56EFO/giphy.gif", "Gigi", 0, "Bébert", "Gérard", "gegedu33@gmail.com", "27, rue des écus, 33110 Le Bouscat"), Avis.DESTESTER),
    new Vote(new Collegue("https://media.giphy.com/media/M7oKkaur56EFO/giphy.gif", "Gigi", 0, "Bébert", "Gérard", "gegedu33@gmail.com", "27, rue des écus, 33110 Le Bouscat"), Avis.AIMER)
  ] 

}
