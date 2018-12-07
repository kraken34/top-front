import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Collegue,Vote } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  @Input() tabCollegue:Collegue[];
  @Input() filterName:string;
  @Output() vote:EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor() { }

  faitPasser(event:Vote){
    this.vote.emit(event);
  }

  ngOnInit() {
  }

}
