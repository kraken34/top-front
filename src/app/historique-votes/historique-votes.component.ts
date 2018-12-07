import { Component, OnInit, Input } from '@angular/core';
import { Vote, Avis } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() votes:Vote[];

  constructor() {
  }

  supprimer(vote:Vote) {
    this.votes.splice(this.votes.findIndex(v=> v === vote), 1);
  }

  avisAimer(vote:Vote):Boolean {
    if(vote.avis === Avis.AIMER) {
      return true;
    } else {
      return false;
    }
  }

  avisDetester(vote:Vote):Boolean {
    if(vote.avis === Avis.DETESTER) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}
