import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
})
export class AvisComponent implements OnInit {

  @Output() vote: EventEmitter<Avis> = new EventEmitter<Avis>();
  // @Output() hist: EventEmitter<> = new EventEmitter();
  constructor() { }

  aimer() {
    this.vote.emit(Avis.AIMER)
  }

  detester() {
    this.vote.emit(Avis.DETESTER)
  }

  ngOnInit() {

  }
}


