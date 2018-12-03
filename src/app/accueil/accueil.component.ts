import { Component, OnInit,Input } from '@angular/core';
import { Collegue, Vote } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  @Input()expandable:Collegue[];
  @Input()votes:Vote[];
  constructor() { }

  ngOnInit() {
  }

}
