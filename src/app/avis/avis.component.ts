import { Component, OnInit, Output, EventEmitter, NgModule, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Avis } from '../models'

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})

@NgModule({
  imports: [NgbModule]
})

export class AvisComponent implements OnInit {

  @Output() eventAvis: EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() disableLike:boolean = false;
  @Input() disableDislike:boolean = false;
  
  constructor() { }

  like() {
    this.eventAvis.emit(Avis.AIMER);
  }

  dislike() {
    this.eventAvis.emit(Avis.DETESTER);
  }

  ngOnInit() {
  }

}
