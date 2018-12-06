import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  id: string
  collegue: Collegue = new Collegue()

  constructor(private route: ActivatedRoute, private collegueService: CollegueService) {
    this.id = route.snapshot.paramMap.get("id")
    collegueService.getCollegue(this.id).then(collegueRecup => this.collegue = collegueRecup)
  }

  ngOnInit() {
  }
}