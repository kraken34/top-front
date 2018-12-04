import { Component } from '@angular/core';
import { Collegue, Vote, Avis } from './models';
import { CollegueService } from './services/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-front';
  expandable: Collegue[];

  constructor(private pService: CollegueService) {
    this.pService.listerCollegues().then(listCollegues => this.expandable = listCollegues);
  }

}
