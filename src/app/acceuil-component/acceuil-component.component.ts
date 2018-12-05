import { Component, OnInit } from '@angular/core';
import { Collegue, Vote, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-acceuil-component',
  templateUrl: './acceuil-component.component.html',
  styleUrls: ['./acceuil-component.component.css']
})
export class AcceuilComponentComponent implements OnInit {

  tabCollegue:Collegue[] = []
  tabVote:Vote[] = []

  constructor(private _colSrv:CollegueService, private _voteSrv:CollegueService ) { }

  ngOnInit() {
    this._colSrv.listerCollegues()
      .then(tab => this.tabCollegue = tab)
      .catch((error: HttpErrorResponse) => {
        console.error("Collegue indisponible :  $(error.message)")
      });
  }
  
  ajouterVote(vote:Vote){
    
    this.tabVote.unshift(vote);
  }
   
}
