import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Vote } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.css']
})
export class ListeColleguesComponent implements OnInit {

  filter:string;
  @Input() collegues:Collegue[]; 
  @Output() eventVote: EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor() {
  }

  ngOnInit() {
  }

  onVote(vote:Vote){
    this.eventVote.emit(vote)
  }}
