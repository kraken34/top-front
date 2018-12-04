import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Vote, Avis } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue:Collegue;
  @Output() eventVote: EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor() {
    
  }

  ngOnInit() {
  }

  onAvis(avis:Avis) {
    this.collegue.majAvis(avis)
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
