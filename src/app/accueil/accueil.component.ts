import { Component, OnInit } from '@angular/core';
import { Collegue, Vote } from '../models';
import { CollegueService } from '../services/collegue.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title:string;
  listCollegues:Collegue[];
  listVotes:Vote[];

  constructor(private _collegueService:CollegueService) {
   
  }

  ajouterVote(unVote:Vote) {
    //Ajouter un vote dans l'historique
    this.listVotes.unshift(unVote);
  }

  onRefrech() {
    this.listVotes = [];
  }

  ngOnInit() {
    this.onRefrech();
    this.title = 'top-collegues-front';
    this._collegueService.listerCollegues()
    .then( c => this.listCollegues = c)
    .catch((error: HttpErrorResponse) => {
      console.error(`Error on service collegue : ${error.message}`)
    });; 
  }

}
