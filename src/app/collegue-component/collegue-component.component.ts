import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import {Collegue, Avis, Vote} from '../models';
import { CollegueService } from '../services/collegue.service';
import { Router } from '@angular/router';
import { AbstractCollegueComp } from '../app.abstractClasses';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss'],
})
export class CollegueComponentComponent extends AbstractCollegueComp {

  @Input() collegue:Collegue;

  // @Output() actionVote:EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(_collegueService:CollegueService, _router:Router) {
    super(_collegueService, _router);
   }

  ngOnInit() {
  }


  voirDetails():void{
    this._router.navigate(['/collegues/'.concat(this.collegue.nom)]);
  }

}
