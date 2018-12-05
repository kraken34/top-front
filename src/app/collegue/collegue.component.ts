import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  @Output() vote: EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(private pService: CollegueService) { }

  likeUnActive() {
    return this.collegue.score >= 1000;
  }

  dislikeUnActive() {
    return this.collegue.score <= -1000;
  }

  traiter(av: Avis) {
    this.pService.donnerUnAvis(this.collegue, av)
      .then(col => {
        this.collegue.score = col.collegue.score;
        this.vote.emit(col);
      });
  }

  ngOnInit() {
  }

}
