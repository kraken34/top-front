import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Avis} from './../models'
@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.css']
})
export class AvisComponentComponent implements OnInit {

@Output() eventLike: EventEmitter<Avis> = new EventEmitter<Avis>();

  constructor() { }

  aimer(){
    this.eventLike.emit(Avis.AIMER);
    
    
  }

  detester(){
    this.eventLike.emit(Avis.DESTESTER);
  }
  ngOnInit() {
  }

}
