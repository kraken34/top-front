import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() backError:EventEmitter<string> = new EventEmitter<string>();

  constructor(private cService: CollegueService) { }

  onAvis(event: Avis) { this.cService.donnerUnAvis(this.collegue, event).then(newCollegue => this.collegue = newCollegue).catch(err => this.backError.emit()) }

  isLikeInactif() { return this.collegue.score >= 100 }
  isDislikeInactif() { return this.collegue.score <= -100 }

  ngOnInit() {
  }
}