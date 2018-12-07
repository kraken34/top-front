import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.css']
})
export class CollegueComponentComponent implements OnInit {

  @Input() collegue:Collegue

  constructor() { }

  traiter(av:Avis){

    if(av===Avis.AIMER){

        this.collegue.score+=100;

    }else{

        this.collegue.score-=100;

    }

}

  ngOnInit() {
    
  }

}

