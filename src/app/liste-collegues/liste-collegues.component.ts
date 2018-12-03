import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Collegue, Avis } from '../models';


@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.css']
})
export class ListeColleguesComponent implements OnInit {

  @Output() actu = new EventEmitter();

  @Input() lesCollegues:Collegue[];

  constructor() { }

  actualiser(){
    this.actu.emit()
  }

  ngOnInit() {
  }



}
