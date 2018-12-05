import { Component, Input, OnInit } from '@angular/core';
import { Avis, Collegue } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue
  @Input() cherch;
  constructor(private _collegueService: CollegueService) { }

  ngOnInit() {
  }

  actualiserAvis(av: Avis) {
    this._collegueService.donnerUnAvis(this.collegue, av)
      .then(col => this.collegue.score = col.score)
    // if (this.collegue.score <= 1000 || this.collegue.score >= -1000) {
    //   if (av == Avis.AIMER) {
    //     this.collegue.score += 100;
    //   } else {
    //     this.collegue.score -= 100;
    //   }
    // }
  }

  maxA() {
    return this.collegue.score < 1000;
  }

  maxD() {
    return this.collegue.score > -1000;
  }
}

