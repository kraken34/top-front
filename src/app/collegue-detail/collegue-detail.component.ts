import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CollegueFull,Vote,Avis } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue-detail',
  templateUrl: './collegue-detail.component.html',
  styleUrls: ['./collegue-detail.component.scss']
})
export class CollegueDetailComponent implements OnInit {

  chuck: CollegueFull;
  @Output() vote: EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(private pService: CollegueService) {
    this.pService.ColleguesByPseudo("Chuck").then(result => {
      this.chuck = result;
      console.log(this.chuck);
    }
    );
  }
  likeUnActive() {
    return false;
  }

  dislikeUnActive() {
    return true;
  }

  traiter(av: Avis) {
    this.pService.donnerUnAvis(this.chuck, av)
      .then(col => {
        this.chuck.score = col.collegue.score;
      });
  }

  ngOnInit() {
  }

}
