import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Vote, Avis } from '../models';
import { CollegueService } from '../collegue.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

 listeCollegues: Collegue[];

  constructor(private _collegueService: CollegueService) { }

  ngOnInit() {
    this._collegueService.listerCollegues().then(collegue =>  this.listeCollegues = collegue);
  }

}
