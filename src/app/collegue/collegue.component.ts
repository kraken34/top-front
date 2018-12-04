import { Component, Input, OnInit } from '@angular/core';
import { ListeColleguesComponent } from '../liste-collegues/liste-collegues.component';
import { Avis, Collegue } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],
})
export class CollegueComponent implements OnInit {
  @Input() listecol: ListeColleguesComponent
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

