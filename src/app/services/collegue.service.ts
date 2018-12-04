import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http:HttpClient) { 


  }

  listerCollegues():Promise<Collegue[]>  {
    // récupérer la liste des collègues côté serveur
    return this._http.get('http://localhost:8080/collegues').toPromise()
    .then((tabColServeur:any []) => tabColServeur.map(cServeur => new Collegue(cServeur.lienPhoto, cServeur.pseudo, cServeur.score)));
  }

  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    // TODO Aimer ou Détester un collègue côté serveur
    return
  }

}
