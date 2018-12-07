import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeau-component',
  templateUrl: './bandeau-component.component.html',
  styleUrls: ['./bandeau-component.component.css']
})
export class BandeauComponentComponent implements OnInit {

  // votreRecu : Observable <vote> 
 // votrerecu : vote = new Vote()
 
  constructor() { }

  ngOnInit() {

  }

}


// constructor( private colServ : Collegueservice) { }

//ngOnInit() {

 //this .colServ.subVoteCollegue.subscibe( vote => this.votrerecu = vote)
// }