import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-historique-vote',
  templateUrl: './historique-vote.component.html',
  styleUrls: ['./historique-vote.component.scss']
})
export class HistoriqueVoteComponent implements OnInit {

  @Input() collegues;
  

  constructor() { }

  ngOnInit() {
  }

}
