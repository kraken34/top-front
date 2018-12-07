import { Component, OnInit, Input, Output } from '@angular/core';
import { Vote, Collegue, Avis } from '../models';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() lesVotes :Vote[]
@Input() col : Collegue;

// @Output() histoVotes = new EventEmitter()
// @Output() suppVotes = new EventEmitter()



  constructor() { }

  ngOnInit() {
  }

aVote(avis:Avis) {
  if (avis === Avis.AIMER) {
    return 
  }
}

supp(vote:Vote) {
 this.lesVotes = this.lesVotes.filter(v=> v!==vote)
}


}
