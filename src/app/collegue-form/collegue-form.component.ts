import { Component, OnInit } from '@angular/core';
import { CollegueForm } from '../models';
import { CollegueService } from '../services/collegue.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-collegue-form',
  templateUrl: './collegue-form.component.html',
  styleUrls: ['./collegue-form.component.css']
})
export class CollegueFormComponent implements OnInit {

  form:CollegueForm = new CollegueForm();

  constructor(private _collegueService:CollegueService, private router:Router) { 

  }

  ngOnInit() {
  }

  submit() {
    console.error(this.form.matricule, this.form.pseudo, this.form.imgURL);
    this._collegueService.creerCollegue(this.form.matricule, this.form.pseudo, this.form.imgURL)
    .then(()=>this.router.navigate(['accueil']))
    .catch((error: HttpErrorResponse) => console.error(`Error on service collegue : ${error.message}`));
  }
}
