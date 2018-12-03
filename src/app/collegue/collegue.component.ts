import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue
  constructor() { }

  ngOnInit() {
  }

  actualiserAvis(av: Avis) {
    if (av == Avis.AIMER) {
      this.collegue.score += 100;
    } else {
      this.collegue.score -= 100;
    }
  }
}

