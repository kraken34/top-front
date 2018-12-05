import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Collegue, Avis } from '../app.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http:HttpClient) {

  }

  listerCollegues():Promise<Collegue[]> {
    // Récupérer la liste des collègues côté serveur
    return this._http.get(environment.backendUrl + "collegues/").toPromise()
        .then((tabColServeur:any[]) => tabColServeur.map(cServeur => new Collegue(cServeur.photo, cServeur.pseudo, cServeur.score)));
  }

  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue> {
    // TODO Aimer ou Détester un collègue côté serveur
    let jsonAvis = {"actions":avis == Avis.AIMER ? "AIMER" : "DETESTER"}

    return this._http.patch(environment.backendUrl +  "collegues/" + unCollegue.pseudo, jsonAvis).toPromise()
      .then((collegueServ:any) => new Collegue(collegueServ.photo, collegueServ.pseudo, collegueServ.score))
     
  }
}
