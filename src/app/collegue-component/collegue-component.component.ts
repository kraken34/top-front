import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import {Collegue, Avis, Vote} from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})
export class CollegueComponentComponent implements OnInit {

  @Input() collegue:Collegue;

  @Output() actionVote:EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(private _collegueService:CollegueService) { }

  ngOnInit() {
  }

  incrementScore(avis:Avis){
    //this.collegue.incrementScore(avis);
    this._collegueService.donnerUnAvis(this.collegue,avis).then(c => this.collegue.score = c.score )
                                                          .catch(err => console.log('erreur lors de l\'avis',err));
    this.actionVote.emit(new Vote(this.collegue,avis));
  }

}
