import { Component, OnInit, Input } from '@angular/core';
import { Vote } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() votes: Vote[];

  constructor() {
  }

  delete(v: Vote) {
    this.votes = this.votes.filter(vote => v !== vote)
  }

  ngOnInit() {
  }

}
