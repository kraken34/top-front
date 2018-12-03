import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Vote } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() hListe:Vote[];
  choix: string;

  constructor() { }

  ajouterH(){
    //this.hListe.push(this.collegue);
  }

  choixC(){
    if(this.hListe[0].colleg.score > 0){
      this.choix = "aimé";
    }else if(this.hListe[0].colleg.score < 0){
      this.choix = "détesté";
    }
    else{
      this.choix = "neutre";
    }
  }

  suppr(){
    this.hListe.pop()//a changer
  }

  ngOnInit() {
  }

}
