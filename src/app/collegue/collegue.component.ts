import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;

  likeUnActive(){
      return this.collegue.score>=1000;
  }

  dislikeUnActive(){
    return this.collegue.score<=-1000;
  }

  ngOnInit() {
  }

}
