import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CollegueFull,Vote,Avis } from '../models';
import { CollegueService } from '../services/collegue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collegue-detail',
  templateUrl: './collegue-detail.component.html',
  styleUrls: ['./collegue-detail.component.scss']
})
export class CollegueDetailComponent implements OnInit {

  chuck: CollegueFull;
  pseudo: string;
  @Output() vote: EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(private pService: CollegueService,private route: ActivatedRoute) {
    this.pseudo = route.snapshot.paramMap.get("pseudo")
    this.pService.ColleguesByPseudo(this.pseudo).then(result => {
      this.chuck = result;
    }
    
    );
  }
  likeUnActive() {
    return this.chuck.score >= 1000;
  }

  dislikeUnActive() {
    return this.chuck.score <= -1000;
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
