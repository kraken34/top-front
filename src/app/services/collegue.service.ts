import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis } from '../model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    return this._http.get(environment.backendUrl + "collegues").toPromise()
      .then((tabColServeur: any[]) => tabColServeur.map(cServeur => new Collegue(cServeur.nom, cServeur.prenom, cServeur.pseudo, cServeur.email, cServeur.adresse, cServeur.score, cServeur.photo)))
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    const jsonAvis = { "action": avis == Avis.AIMER ? "AIMER" : "DETESTER" }

    return this._http.patch(environment.backendUrl + "collegues/" + unCollegue.pseudo, jsonAvis).toPromise()
      .then((collegue: any) => new Collegue(collegue.nom, collegue.prenom, collegue.pseudo, collegue.email, collegue.adresse, collegue.score, collegue.photo))
  }

  getCollegue(pseudo: string): Promise<Collegue> {
    return this._http.get(environment.backendUrl + "collegues/" + pseudo).toPromise()
      .then((collegue: any) => new Collegue(collegue.nom, collegue.prenom, collegue.pseudo, collegue.email, collegue.adresse, collegue.score, collegue.photo))
  }

  exists(matricule: string, pseudo: string, photo: string): Promise<any> {
    return this._http.post(environment.backendUrl + "collegues", { matricule, pseudo, photo }, { observe: "response" }).toPromise()
  }
}