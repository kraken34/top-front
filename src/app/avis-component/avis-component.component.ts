import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models';
@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.css']
})
export class AvisComponentComponent implements OnInit {

  constructor() {}
  @Output() change: EventEmitter<Avis> = new EventEmitter<Avis>();
  quandOnCliqueAimer() {
    this.change.emit(Avis.AIMER);
  }
  quandOnCliqueDetester() {
    this.change.emit(Avis.DETESTER);
  }
  ngOnInit() {
  }

}
