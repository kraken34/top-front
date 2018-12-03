import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Vote } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {
  
  @Input() hListe:Vote[];

  constructor() { }

  ajouterH(){
    //this.hListe.push(this.collegue);
  }

  suppr(){
    this.hListe.pop()//a changer
  }

  ngOnInit() {
  }

}
