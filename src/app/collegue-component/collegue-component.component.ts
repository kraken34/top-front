import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { CollegueService } from '../services/collegue.service';


@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.css']
})
export class CollegueComponentComponent implements OnInit {
@Output()  eventVote:EventEmitter<Vote> = new EventEmitter<Vote>();
  @Input() collegue:Collegue
 

  constructor(private _collegueService: CollegueService) { }

  ngOnInit() {
  }
onAvis(avis:Avis){
  this._collegueService.donnerUnAvis(this.collegue,avis).then(c=> this.collegue.score = c.score);
  this.eventVote.emit(new Vote(this.collegue,avis));
  
}
 

}
