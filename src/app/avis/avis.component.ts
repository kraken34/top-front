import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
})
export class AvisComponent implements OnInit {

  @Input() maxA;
  @Input() maxD;
  
  @Output() vote: EventEmitter<Avis> = new EventEmitter<Avis>();
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