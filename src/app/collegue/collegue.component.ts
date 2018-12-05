import { Component, OnInit, Input } from '@angular/core';
import { Collegue,Avis } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;

  constructor(private pService: CollegueService){

  }

  likeUnActive(){
      return this.collegue.score>=1000;
  }

  dislikeUnActive(){
    return this.collegue.score<=-1000;
  }

  traiter(av: Avis) {   
    this.pService.donnerUnAvis(this.collegue,av).then(col=>this.collegue.score=col.score);
}

  ngOnInit() {
  }

}
