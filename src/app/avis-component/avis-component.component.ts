import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.scss']
})
export class AvisComponentComponent implements OnInit {

    @Output() counterChange = new EventEmitter();

    addScore() {
      this.counterChange.emit(Avis.AIMER);
    }

    subScore() {
      this.counterChange.emit(Avis.DETESTER);
    }

  constructor() {

   }

  ngOnInit() {
  }

}
