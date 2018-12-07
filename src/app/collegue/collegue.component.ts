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

  constructor(private _collegueService: CollegueService) { }

  ngOnInit() {
  }


  notation(eventAvis: Avis) {
    console.log(this.collegue.score)

    this._collegueService.donnerUnAvis(this.collegue, eventAvis)
      .then(c => this.collegue.score = c.score)
      .catch(e => console.log(e, "erreur lors de la publication de votre avis"))

  }


  tropDamour() {
    return this.collegue.score < 1000
  }
  tropDeHaine() {
    return this.collegue.score > -1000
  }

}



