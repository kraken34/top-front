import { CollegueService } from './services/collegue.service';
import { Router } from '@angular/router';
import { OnInit, Output } from '@angular/core';
import { Avis, Vote, Collegue } from './models';
import { EventEmitter } from '@angular/core';

export abstract class AbstractCollegueComp implements OnInit{
    
    collegue:Collegue;

    @Output() actionVote:EventEmitter<Vote> = new EventEmitter<Vote>();

    constructor(protected _collegueService:CollegueService, protected _router:Router) {
    }

    
  incrementScore(avis:Avis){
    //this.collegue.incrementScore(avis);
    this._collegueService.donnerUnAvis(this.collegue,avis)
    .then(c =>{this.collegue.score = c.score;
              this.actionVote.emit(new Vote(this.collegue,avis))
              })
    .catch(err => console.log('erreur lors de l\'avis',err));
 
  }
    ngOnInit(){}
}