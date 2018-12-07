import { Component, OnInit, Input } from '@angular/core';
import { Vote, Avis } from '../models';


@Component({
  selector: 'app-historique-votes-component',
  templateUrl: './historique-votes-component.component.html',
  styleUrls: ['./historique-votes-component.component.css']
})
export class HistoriqueVotesComponentComponent implements OnInit {

  @Input()  listevote:Vote[]

  constructor() { }

  ngOnInit() {

 }

 suppr(vote:Vote) {

   this.listevote =  this.listevote.filter(v => v !== vote)

 }

 }





