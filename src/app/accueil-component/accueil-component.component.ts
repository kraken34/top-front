import { Component, Input, OnInit } from '@angular/core';
import { Collegue, Vote, } from '../models';
import { CollegueService } from '../services/collegue.service'
@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  listesCollegue: Collegue[] = []

  listevote: Vote[] = []

  constructor(private _collegueService: CollegueService) {

  }


  ngOnInit() {

    this._collegueService.listerCollegues().then(
      cols => this.listesCollegue = cols
    )

  }

}












//.then( c => this.listeCollegue = c )