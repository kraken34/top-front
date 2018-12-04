import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis } from '../model';

@Injectable({
  providedIn: 'root'
})

export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    return this._http.get("http://localhost:8080/collegues").toPromise()
      .then((tabColServeur: any[]) => tabColServeur.map(cServeur => new Collegue(cServeur.photo, cServeur.pseudo, cServeur.score)))
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    const jsonAvis = { "action": avis == Avis.AIMER ? "AIMER" : "DETESTER" }

    return this._http.patch("http://localhost:8080/collegues/" + unCollegue.pseudo, jsonAvis).toPromise()
      .then((collegue: any) => new Collegue(collegue.photo, collegue.pseudo, collegue.score))
  }
}