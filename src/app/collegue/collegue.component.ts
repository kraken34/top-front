import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../model';
import { CollegueService } from '../services/collegue.service';
import { HistoriqueVotesComponent } from '../historique-votes/historique-votes.component';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue

  constructor(private cService: CollegueService) { }

  onAvis(event: Avis) { this.cService.donnerUnAvis(this.collegue, event).then(newCollegue => this.collegue = newCollegue).catch(err => console.log(err)) }

  isLikeInactif() { return this.collegue.score >= 100 }
  isDislikeInactif() { return this.collegue.score <= -100 }

  ngOnInit() {
  }
}