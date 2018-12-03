import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Vote } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  @Input() collegues:Collegue[];

  @Output() actionVote:EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor() { }

  ngOnInit() {
  }

  remonteVote(vote:Vote){
    this.actionVote.emit(vote);
  }

}
