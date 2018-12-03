import { Component, OnInit, Input } from '@angular/core';
import {HistoriqueVotes} from '../models';

@Component({
  selector: 'app-historique-vote',
  templateUrl: './historique-vote.component.html',
  styleUrls: ['./historique-vote.component.scss']
})
export class HistoriqueVoteComponent implements OnInit {

  @Input() historiqueVotes:HistoriqueVotes;
  
  constructor() { }

  ngOnInit() {
  }

}
