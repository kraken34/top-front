import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis } from '../model';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})

export class AvisComponent implements OnInit {

  @Output() change: EventEmitter<Avis> = new EventEmitter<Avis>()

  @Input() likeActivated: boolean = true
  @Input() dislikeActivated: boolean = true

  like() { this.change.emit(Avis.AIMER) }
  dislike() { this.change.emit(Avis.DETESTER) }

  ngOnInit() {
  }
}
