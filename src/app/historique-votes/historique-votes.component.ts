import { Component, OnInit, Input } from '@angular/core';
import { Vote,Avis } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() listVote:Vote[];

  constructor() { }

  ngOnInit() {
  }

  etreAimer(avis:Avis){
    if (avis===Avis.AIMER) {
      return true
    } else {
      return false
    }
  }

  delete(vote:Vote){
    this.listVote=this.listVote.filter((myVote)=>myVote!==vote)
  }


}
