import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../app.model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;

  constructor(private aService:CollegueService) {

  }

  ngOnInit() {
  }


  onAvis(event:Avis) {
    this.aService.donnerUnAvis(this.collegue, event).then(
    newCollegue => {this.collegue = newCollegue}
  )
}



  isLikeActive() {
    return this.collegue.score < 100
  }

  isDislikeActive() {
    return this.collegue.score > -100
  }

}
