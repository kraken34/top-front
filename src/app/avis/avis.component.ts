import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() click:EventEmitter<Avis> = new EventEmitter<Avis>();
  

  constructor() { }

  ngOnInit() {
  }

}
