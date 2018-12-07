import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis, Collegue } from '../models';
import { INSPECT_MAX_BYTES } from 'buffer';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.scss']
})
export class AvisComponentComponent implements OnInit {

    @Output() counterChange = new EventEmitter();
    @Input() like = true;
    @Input() dislike = true; 


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
