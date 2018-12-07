import { Component, OnInit, Input } from '@angular/core';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { Collegue, Avis } from '../models';
import { CollegueService } from '../collegue.service';


@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.css']
})
export class CollegueComponentComponent implements OnInit {

  @Input() collegue: Collegue;
  constructor(private _collegueService: CollegueService) { }
  traiter(avis: Avis) {
    this._collegueService.donnerUnAvis(this.collegue, avis).then(cServeur => this.collegue.score = cServeur.score);
  }
  ngOnInit() {
  }

}
