import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Vote, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue:Collegue;
  @Output() eventVote: EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(private _collegueService:CollegueService) {
    
  }

  ngOnInit() {
  }

  onAvis(avis:Avis) {
    this._collegueService.donnerUnAvis(this.collegue, avis).then(c => this.collegue.score = c.score);
    this.eventVote.emit(new Vote(this.collegue, avis))
  }

  isDisliked() {
    if(this.collegue.score <= -1000)
    {
      return true;
    }
    else {
      return false;
    }
  }

  isLiked() {
    if(this.collegue.score >= 1000)
    {
      return true;
    }
    else {
      return false;
    }
  }
}
