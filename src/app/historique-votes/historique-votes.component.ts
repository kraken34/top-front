import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Vote} from '../app.model';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() votes:Vote[];

  constructor() { }

  ngOnInit() {
  }


  // Method of delete one vote
  supprimer(unVote:Vote) {
    this.votes = this.votes.filter(vote => unVote !== vote)
  }

}
