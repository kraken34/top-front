import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../models';
import { CollegueService } from '../collegue.service';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {

  collegue: Collegue;
  pseudo: string;

  constructor(private route: ActivatedRoute, private _collegueService: CollegueService) {
    this.pseudo = this.route.snapshot.paramMap.get('pseudo');
   }

  ngOnInit() {
    this._collegueService.afficherUnCollegue(this.pseudo).then(collegue => this.collegue = collegue);
  }

}
