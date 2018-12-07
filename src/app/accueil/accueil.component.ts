import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Collegue, Vote, Avis } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeCollegues: Collegue[] = [];
  voteListe: Vote[] = [];

  constructor(private _collegueService: CollegueService) {
  }

  ngOnInit() {
    this._collegueService.listerCollegues()
      .then(cols => this.listeCollegues = cols)
  }
}
