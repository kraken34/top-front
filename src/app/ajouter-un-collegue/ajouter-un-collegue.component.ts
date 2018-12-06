import { Component } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { stringify } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.css']
})
export class AjouterUnCollegueComponent{

  errorMatricule:boolean= false

  matricule:string;
  pseudo:string;
  photo:string;

  constructor(private cService:CollegueService, private router:Router) {

  }

  submit(){
    this.errorMatricule = false;
    this.cService.exists(this.matricule, this.pseudo, this.photo)
      .then(() => {
        this.router.navigate(['/accueil'])
      }).catch((error: HttpErrorResponse) => {
        if(error.status == 400) {
          this.errorMatricule = true;
        } else {
          this.router.navigate(['/accueil'])
        }
      })
  }

}
