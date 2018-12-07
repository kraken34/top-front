import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { AjouterUnCollegueComponent } from '../ajouter-un-collegue/ajouter-un-collegue.component';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.css'],
})
export class ListeColleguesComponent implements OnInit {

  filtrage:string

  @Input() lesCollegues:Collegue[]
  @Input() ajout:AjouterUnCollegueComponent
  constructor() { }
   


  ngOnInit() {
  }


}
