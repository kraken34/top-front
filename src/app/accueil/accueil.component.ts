import { Component, OnInit } from '@angular/core';
import { Collegue, Vote } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title:string;
  listCollegues:Collegue[];
  listVotes:Vote[];

  constructor() {
    this.onRefrech();
    this.title = 'top-collegues-front';
    this.listCollegues = [new Collegue("Patrick", "https://media.giphy.com/media/eHpWHuEUxHIre/giphy.gif", 500),
    new Collegue("Bob", "https://media.giphy.com/media/DROP5YnPcJLLG/giphy.gif", 500),
    new Collegue("Garry", "https://media.giphy.com/media/9pnP2yxqjheFO/giphy.gif", 500),
    new Collegue("Cpt Krabs", "https://media.giphy.com/media/gXhBZfzijya76/giphy.gif", 500),
    new Collegue("Sandy", "https://media.giphy.com/media/l1Ku53fLq0C2KYWsg/giphy.gif", 500),
    new Collegue("Plancton", "https://media.giphy.com/media/3ohzAiVqeYVSaqoP6w/giphy.gif", 500),
    new Collegue("Carlo", "https://media.giphy.com/media/3oKHWuRz1wzaAoygZa/giphy.gif", 500),
    new Collegue("Nian", "https://media.giphy.com/media/BcZZaMtMBmakw/giphy.gif", 500),
    new Collegue("Mrs Puff", "https://media.giphy.com/media/3oKHWoYA631FfBJPuE/giphy.gif", 500)]; 
  }

  onVote(unVote:Vote) {
    this.listVotes.unshift(unVote);
  }

  onRefrech() {
    this.listVotes = [];
  }

  ngOnInit() {
  }

}
