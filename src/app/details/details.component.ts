import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../app.model';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  title = 'Detail of colleague'

  @Input() collegue:Collegue
  pseudo:string

  constructor(private route: ActivatedRoute, private cService:CollegueService) {
    this.pseudo = route.snapshot.paramMap.get("pseudo")
    cService.getOneCollegue(this.pseudo)
      .then(collegueRecup => this.collegue = collegueRecup)
  }

  ngOnInit() {
  }

}
