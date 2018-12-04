import { Component, OnInit } from '@angular/core';
import { Collegue } from '../model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-liste-collegue',
  templateUrl: './liste-collegue.component.html',
  styleUrls: ['./liste-collegue.component.css']
})

export class ListeCollegueComponent implements OnInit {

  collegues: Collegue[] = []

  constructor(private cService: CollegueService) { }

  refresh() {
    this.cService.listerCollegues().then(colleguesList => this.collegues = colleguesList)
  }

  ngOnInit() {
    this.refresh()
  }
}