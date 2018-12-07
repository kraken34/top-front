import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Vote } from '../models';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {
  @Output() eventVote:EventEmitter<Vote> = new EventEmitter<Vote>();
@Input() collegues: Collegue[]; 

filtreP:string;

  constructor() { }

  ngOnInit() {
  }
  onEventVote(vote:Vote){
    this.eventVote.emit(vote);
    
  }
}
