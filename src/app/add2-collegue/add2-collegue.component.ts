import { Component } from '@angular/core';
import { CollegueService } from '../collegue.service';
import { CollegueForm } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add2-collegue',
  templateUrl: './add2-collegue.component.html',
  styleUrls: ['./add2-collegue.component.css'],
})
export class Add2CollegueComponent {

  messageError: string;
  matricules: string[];
  collegueForm = new CollegueForm();
  constructor(private _collegueService: CollegueService, private router: Router) {
    _collegueService.listerLesMatriculesExistant().then(tabMatricules => this.matricules = tabMatricules);
  }

  submit(collegueForm: CollegueForm) {
    this._collegueService.ajouterUnCollegue(collegueForm).then(() => this.router.navigate(['/accueil'])).catch((error) => {
      this.messageError = error.error;
    });
  }
}
