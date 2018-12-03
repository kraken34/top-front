import { Component, OnInit, Input, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { Collegue } from '../models';
@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {

  @Input() collegues:Collegue[]

  
 /* <ul>
  <li ngFor="let obj of maListe"> {{obj.nom}} </li>
</ul>
*/

  constructor() { }

  

  
  ngOnInit() {
  }

}

