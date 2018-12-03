import { Component, OnInit, Input } from '@angular/core';
import {Vote} from '../models';

@Component({
  selector: 'app-historique-votes-component',
  templateUrl: './historique-votes-component.component.html',
  styleUrls: ['./historique-votes-component.component.css']
})
export class HistoriqueVotesComponentComponent implements OnInit {
@Input() votes: Vote[];
  constructor() { }
  
  supprimer(voteASupprimer:Vote){
    this.votes = this.votes.filter(v => v != voteASupprimer)
  }
  ngOnInit() {
  }

}
