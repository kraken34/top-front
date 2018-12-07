import { Component, OnInit } from '@angular/core';
import { Collegue } from '../model';
import { CollegueService } from '../services/collegue.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {

  errorMatricule: boolean = false

  matricule: string
  pseudo: string
  photo: string

  constructor(private service: CollegueService, private router: Router) { }

  submit() {
    this.errorMatricule = false
    this.service.exists(this.matricule, this.pseudo, this.photo).subscribe(() => this.router.navigate(['/accueil']),
      (error: HttpErrorResponse) => {
        if (error.status == 400)
          this.errorMatricule = true
        else
          this.router.navigate(['?'])
      })
  }

  ngOnInit() {
  }
}