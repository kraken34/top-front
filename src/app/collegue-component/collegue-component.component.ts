import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import {Collegue, Avis, Vote} from '../models';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})
export class CollegueComponentComponent implements OnInit {

  @Input() collegue:Collegue;

  @Output() actionVote:EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor() { }

  ngOnInit() {
  }

  incrementScore(avis:Avis){
    this.collegue.incrementScore(avis);
    this.actionVote.emit(new Vote(this.collegue,avis));
  }

}
