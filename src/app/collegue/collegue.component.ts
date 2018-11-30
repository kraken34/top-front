import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],
  // template:`<div>{{collegue}}</div>`
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  constructor() { }

  ngOnInit() {
  }

}
