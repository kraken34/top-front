import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Collegue, Avis, Vote } from '../models';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collegue-details',
  templateUrl: './collegue-details.component.html',
  styleUrls: ['./collegue-details.component.css']
})
export class CollegueDetailsComponent implements OnInit {

  collegue:Collegue;
  @Output() eventVote: EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(private _collegueService:CollegueService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.details(this.route.snapshot.paramMap.get("pseudo"));
  }

  details(pseudo:string) {
    this._collegueService.detailsCollegues(pseudo)
    .then((c:Collegue) => this.collegue = c)
    .catch((error: HttpErrorResponse) => {
      console.error(`Error on service collegue : ${error.message}`)});
  }

  onAvis(avis:Avis) {
    this._collegueService.donnerUnAvis(this.collegue, avis)
    .then(c => this.collegue.score = c.score)
    .catch((error: HttpErrorResponse) => {
      console.error(`Error on service collegue : ${error.message}`)});
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
