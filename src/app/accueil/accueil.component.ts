import { Component, OnInit,Input } from '@angular/core';
import { Collegue, Vote } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  title = 'Accueil';
  expandable:Collegue[];
  votes:Vote[];
  filterName:string;

  constructor(private pService: CollegueService) {
    this.pService.listerCollegues().then(listCollegues => this.expandable = listCollegues);
  }

  addVote(newVote){
    this.votes.unshift(newVote)
  }

  ngOnInit() {
    this.votes=[];

  }

}
