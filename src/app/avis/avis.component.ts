import { Component, OnInit, Input } from '@angular/core';
import { CollegueComponent } from '../collegue/collegue.component';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
})
export class AvisComponent implements OnInit {

  @Input() Collegue = new CollegueComponent()
  constructor() { }

  Click(){

  }

  Click2(){

  }

  ngOnInit() {

  }
}


