
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Avis, Collegue } from '../models';
import { AjoutcollegueComponent } from '../ajoutcollegue/ajoutcollegue.component';




const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }


   // subVoteCollegue = new Subject <vote> ()

   // getactiono

  listerCollegues(): Promise<Collegue[]> {

    // récupérer la liste des collègues côté serveur

    return this._http.get(URL_BACKEND + '/collegues').toPromise()

      .then((tabColServeur: any[]) => tabColServeur.map(cServeur => new Collegue(cServeur.pseudo, cServeur.score, [cServeur.photo], cServeur.nom, cServeur.prenom, cServeur.email, cServeur.adresse)));

  }


  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {

    // TODO Aimer ou Détester un collègue côté serveur

    return this._http.patch<Collegue>(`${URL_BACKEND}/collegues/${unCollegue.pseudo}`,
      { "action": avis.valueOf() },
      { headers: new HttpHeaders({ "Content-Type": "application/json" }) }).toPromise()
      .then((c: Collegue) => c);

  }
  colleguesParPseudo(pseudo: string): Promise<Collegue> {

   return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${pseudo}`).toPromise().then((cServeur: Collegue) => new Collegue(cServeur.pseudo, cServeur.score, cServeur.listImages, cServeur.nom, cServeur.prenom, cServeur.email, cServeur.adresse)); 

}

CreerNouveauCollegue(ajoutcollegue: AjoutcollegueComponent): Promise<AjoutcollegueComponent> {

 return this._http.post( `${URL_BACKEND}/collegues/ajouter`,ajoutcollegue)
 .toPromise().then((c: AjoutcollegueComponent) => c);

}
}