import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis, Vote } from '../app.model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  error:boolean;

  constructor(private aService:CollegueService) {

  }

  ngOnInit() {
  }


  onAvis(event:Avis) {
    this.aService.donnerUnAvis(this.collegue, event).subscribe(
    newCollegue => {this.collegue = newCollegue; 
    this.aService.lastValue.next(new Vote(this.collegue, event))}
    , err => this.error = true
  )
}



  isLikeActive() {
    return this.collegue.score < 100
  }

  isDislikeActive() {
    return this.collegue.score > -100
  }

}
