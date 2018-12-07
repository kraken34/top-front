import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.scss']
})
export class AvisComponentComponent implements OnInit {


  @Input() score;

  @Output() action: EventEmitter<Avis> = new EventEmitter<Avis>();
  
  // avis:Avis;

  constructor() { }

  ngOnInit() {
  }

  donnerAvisPositif(){
    this.action.emit(Avis.AIMER);
  }
  donnerAvisNegatif(){
    this.action.emit(Avis.DETESTER);
  }

}
