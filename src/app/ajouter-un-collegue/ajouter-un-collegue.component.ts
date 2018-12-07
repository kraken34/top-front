import { Component, OnInit } from '@angular/core';
import { FormCollegue } from '../models';
import { CollegueService } from '../services/collegue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.scss']
})
export class AjouterUnCollegueComponent implements OnInit {

  monModel: FormCollegue = new FormCollegue();
  messageError:string;

  constructor(protected pService: CollegueService, private router: Router) { }

  submit() {
    //console.log(this.monModel);
    this.pService.CreateCollegues(this.monModel)
      .then(() => this.router.navigate(['/']))
      .catch((error) => {
        this.messageError=error.error;
      });

  }

  ngOnInit() {
  }

}
