import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Collegue } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})


export class AccueilComponent implements OnInit {


  collegueTab:Collegue[] = [];

  constructor(private cService:CollegueService) { }

  ngOnInit() {
    this.cService.listerCollegues().then(
      collegues => this.collegueTab = collegues
    )
  }

}
