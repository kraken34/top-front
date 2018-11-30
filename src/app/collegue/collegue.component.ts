import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../app.model';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  @Input() collegue2:Collegue;
  @Input() collegue3: Collegue;

  constructor() {

  }

  ngOnInit() {
  }

}
