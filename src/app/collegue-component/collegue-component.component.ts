import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import {Collegue, Avis, Vote} from '../models';
import { CollegueService } from '../services/collegue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})
export class CollegueComponentComponent implements OnInit {

  @Input() collegue:Collegue;

  @Output() actionVote:EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(protected _collegueService:CollegueService, protected _router:Router) { }

  ngOnInit() {
  }

  incrementScore(avis:Avis){
    //this.collegue.incrementScore(avis);
    this._collegueService.donnerUnAvis(this.collegue,avis)
    .then(c =>{this.collegue.score = c.score;
              this.actionVote.emit(new Vote(this.collegue,avis))
              })
    .catch(err => console.log('erreur lors de l\'avis',err));
 
  }

  voirDetails():void{
    this._router.navigate(['/collegues/'.concat(this.collegue.nom)]);
  }

}
