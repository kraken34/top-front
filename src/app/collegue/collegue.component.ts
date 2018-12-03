import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../model';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue

  onAvis(event: Avis) {
    event == Avis.AIMER ? this.collegue.score++ : this.collegue.score--
  }

  ngOnInit() {
  }
}