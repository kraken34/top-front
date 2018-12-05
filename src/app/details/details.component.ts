import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../services/collegue.service';
import { Collegue } from '../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() collegue:Collegue

  pseudo:string;

  constructor(private route: ActivatedRoute, private cService:CollegueService) { 
    this.pseudo = route.snapshot.paramMap.get("pseudo")
    cService.getACollegue(this.pseudo)
    .then(collegueCatch => this.collegue = collegueCatch)
  }

  ngOnInit() {
  }

}
