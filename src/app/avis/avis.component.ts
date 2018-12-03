import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() change:EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() jaimeActif:boolean;
  @Input() destesteActif:boolean;
  
  avisPositif() {
    this.change.emit( Avis.AIMER);
  }

  avisNegatif() {
    this.change.emit( Avis.DETESTER);
  }

  constructor() { }

  ngOnInit() {
  }

}
