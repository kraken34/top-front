import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis } from '../model';
import { environment } from 'src/environments/environment';

const URL_BACKEND = environment.backendUrl

@Injectable({
  providedIn: 'root'
})

export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    return this._http.get("http://florian-top-collegues.herokuapp.com/collegues").toPromise()
      .then((tabColServeur: any[]) => tabColServeur.map(cServeur => new Collegue(cServeur.photo, cServeur.pseudo, cServeur.score)))
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    const jsonAvis = { "action": avis == Avis.AIMER ? "AIMER" : "DETESTER" }

    return this._http.patch("http://florian-top-collegues.herokuapp.com/collegues/" + unCollegue.pseudo, jsonAvis).toPromise()
      .then((collegue: any) => new Collegue(collegue.photo, collegue.pseudo, collegue.score))
  }
}