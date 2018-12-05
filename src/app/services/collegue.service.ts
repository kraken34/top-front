import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http:HttpClient) { 


  }

  listerCollegues():Promise<Collegue[]>  {
    // récupérer la liste des collègues côté serveur
    return this._http.get(environment.backendUrl + "/collegues/").toPromise()
    .then((tabColServeur:any []) => tabColServeur.map(cServeur => new Collegue(cServeur.lienPhoto, cServeur.pseudo, cServeur.score, cServeur.nom, cServeur.prenom, cServeur.email)));
  }

  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    // TODO Aimer ou Détester un collègue côté serveur
    return
  }


  getACollegue(pseudo:string):Promise<Collegue>{
    return this._http.get(environment.backendUrl + "/collegues/" +pseudo).toPromise()
    .then((collegue:any) => new Collegue(collegue.lienPhoto, collegue.pseudo, collegue.score, collegue.nom, collegue.prenom, collegue.email));
  }


}
