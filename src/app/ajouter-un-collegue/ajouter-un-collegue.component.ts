import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { AjoutCollegue } from './models';

@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.css']
})
export class AjouterUnCollegueComponent implements OnInit {
  ajoutCollegue = new AjoutCollegue();

  constructor(private _collegueService: CollegueService) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.ajoutCollegue);
    this._collegueService.ajouterCollegue(this.ajoutCollegue);
  }

}

