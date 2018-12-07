import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Vote } from '../models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  @Input() collegues:Collegue[];

  @Output() actionVote:EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  remonteVote(vote:Vote){
    this.actionVote.emit(vote);
  }

  creerCollegue():void{
    this._router.navigate(["/nouveau"]);
  }

}
