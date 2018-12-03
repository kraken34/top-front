import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Avis, Collegue} from '../app.model';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() change : EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() likeActive = true
  @Input() dislikeActive = true

  ngOnInit() {
  }

  aimer(){
      this.change.emit(Avis.AIMER)
  }

  detester(){
      this.change.emit(Avis.DESTESTER)

  }

}
