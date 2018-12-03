import { Component, OnInit, Input } from '@angular/core';
import { Vote } from '../models';

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
    this.votes = this.votes.filter(v=> v != vote);
  }

  ngOnInit() {
  }

}
