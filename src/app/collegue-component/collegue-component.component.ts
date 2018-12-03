import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})
export class CollegueComponentComponent implements OnInit {

  @Input() collegue:Collegue;


  constructor() { 
  }

  ngOnInit() {
  }

  onChange(avis:Avis) {
    if(avis === Avis.AIMER) {
      this.collegue.score ++;
    } else {
      this.collegue.score --;
    }
  }


isMax() {
  return this.collegue.score < 100
}

isMin() {
  return this.collegue.score > -10
}


}
