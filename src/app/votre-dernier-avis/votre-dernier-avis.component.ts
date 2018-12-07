import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Avis } from '../model';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})

export class VotreDernierAvisComponent implements OnInit {

  texte: string = "Vote pour une copine !"

  constructor(private cService: CollegueService) {
    cService.lastAvisSubject.subscribe(vote => this.texte = (vote.avis == Avis.AIMER ? "Je kiff grave " : "Je crache à la gueule de ") + vote.collegue.pseudo)
  }

  ngOnInit() {
  }
}