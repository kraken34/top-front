import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  @Output() counterChange = new EventEmitter<Avis>()
  @Input() tropDeHaine;
  @Input() tropDamour;




  constructor() { }

  ngOnInit() {
  }





  aimer() {
   this.counterChange.emit(Avis.AIMER)
  }

  hair() {
    this.counterChange.emit(Avis.DETESTER)         
  }
}
