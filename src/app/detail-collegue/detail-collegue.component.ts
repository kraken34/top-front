import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegueService } from '../services/collegue.service';
import { Collegue,  CollegueAcDetails } from '../models';
import { AbstractCollegueComp } from '../app.abstractClasses';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.scss']
})
export class DetailCollegueComponent extends AbstractCollegueComp {


  // nomRecherche: String;
  collegue: CollegueAcDetails = new CollegueAcDetails('unknown', 0, 'https://edu.glogster.com/library/proxy?url=http%3A%2F%2Fliteraturef1tof3.weebly.com%2Fuploads%2F2%2F8%2F4%2F7%2F28471431%2F5973721_orig.jpg','000@00.0');

  constructor(_collegueService:CollegueService, private _route: ActivatedRoute, _router: Router) {
    super(_collegueService, _router) }

  ngOnInit() {

    let nomRecherche = this._route.snapshot.paramMap.get("nom");

    this._collegueService.getCollegueByNom(nomRecherche)
      .then((c: CollegueAcDetails) => this.collegue = c)
      .catch(err => {
        console.log("Erreur lors de la requête vers le détail de ", nomRecherche, err);

        setTimeout(() => {
          this._router.navigate(['/accueil'])
        }, 3000)
      })

  }


}
