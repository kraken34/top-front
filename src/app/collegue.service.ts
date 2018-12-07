import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis, CollegueForm } from './models';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }
  listerCollegues(): Promise<Collegue[]> {
    const URL_BACKEND = environment.backendUrl;
    return this._http.get(URL_BACKEND + '/collegues').toPromise().then(
      (tabColServeur: any[]) => tabColServeur.map(
        cServeur => new Collegue(
          cServeur.pseudo, cServeur.imageUrl, cServeur.score)));
  }

  afficherUnCollegue(unColleguePseudo: string): Promise<Collegue> {
    const URL_BACKEND = environment.backendUrl;
    return this._http.get(URL_BACKEND + '/collegues/' + unColleguePseudo).toPromise().then(
      (c: Collegue) => c);
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    const URL_BACKEND = environment.backendUrl;
    // TODO Aimer ou Détester un collègue côté serveur
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.patch(URL_BACKEND + '/collegues/' + unCollegue.pseudo, {'action' : avis}, httpOptions).toPromise().then(
      (cServeur: any) => new Collegue(cServeur.pseudo, cServeur.imageUrl, cServeur.score)
    );
  }

  listerLesMatriculesExistant(): Promise<string[]> {
    const URL_BACKEND = environment.backendUrl;
    return this._http.get<string[]>(URL_BACKEND + '/collegues/matricules').toPromise();
  }

  ajouterUnCollegue(unCollegue: CollegueForm): Promise<any> {
    const URL_BACKEND = environment.backendUrl;
    return this._http.post(URL_BACKEND + '/collegues/nouveau', unCollegue,
    {headers: new HttpHeaders({ 'Content-Type': 'application/json'}), responseType: 'text' }).toPromise();
  }

}
