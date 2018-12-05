import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue, Avis, Vote } from '../models';
import { CollegueService } from '../services/collegue.service';
@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {

@Output()  eventVote:EventEmitter<Vote> = new EventEmitter<Vote>();
pseudo:string;
collegue:Collegue
    constructor(private detailCollegue:CollegueService ,private route:ActivatedRoute) { 
      this.pseudo= route.snapshot.paramMap.get("pseudo")
    }
 
    ngOnInit() {
      this.detailCollegue.listerUnCollegue(this.pseudo)
      .then(col => this.collegue = col)
    }

  onAvis(avis:Avis){
    this.detailCollegue.donnerUnAvis(this.collegue,avis).then(c=> this.collegue.score = c.score);
    //this.eventVote.emit(new Vote(this.collegue,avis));
    
  }
}
