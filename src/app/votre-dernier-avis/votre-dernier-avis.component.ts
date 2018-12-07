import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Avis, Collegue } from '../app.model';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {

  lastValue:string = "Aucun vote pour l'instant";

  constructor(private cService:CollegueService) {
    this.cService.lastValue.subscribe(
      
      vote => {
       if(vote.avis == Avis.AIMER) {
          this.lastValue = "J'aime " + vote.collegue.pseudo + ", il a un score de " + vote.collegue.score
       } else if (vote.avis == Avis.DESTESTER) {
         this.lastValue = "Je n'aime pas " + vote.collegue.pseudo + ", il a un score de " + vote.collegue.score
       }
      }
    )
}

  ngOnInit() {

  }

}
