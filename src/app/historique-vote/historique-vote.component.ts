import { Component, OnInit, Input } from '@angular/core';
import { HistoriqueVotes, Vote } from '../models';

@Component({
  selector: 'app-historique-vote',
  templateUrl: './historique-vote.component.html',
  styleUrls: ['./historique-vote.component.scss']
})
export class HistoriqueVoteComponent implements OnInit {

  @Input() historiqueVotes: HistoriqueVotes;

  constructor() { }

  ngOnInit() {
  }

  supprimerVote(voteI: Vote) {

     this.historiqueVotes.supprimerVote(voteI);
    // this.historiqueVotes.votes = this.historiqueVotes.votes.filter(v=>v!==voteI);
  }

}
