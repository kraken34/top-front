import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Avis, Collegue } from '../models';
import { AjoutCollegue } from '../ajouter-un-collegue/models';

const URL_BACKEND = environment.backendUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    return this._http.get(`${URL_BACKEND}/collegues`).toPromise()
      .then((tabCol: any[]) => tabCol
        .map(col => new Collegue(col.photo, col.pseudo, col.score, col.nom, col.prenom, col.email, col.adresse)))
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    return this._http.patch(`${URL_BACKEND}/collegues/${unCollegue.pseudo}`, { "action": avis }, httpOptions)
      .toPromise().then((c: Collegue) => c)
  }

  chercherParPseudo(pseudo: string): Observable<Collegue> {
    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${pseudo}`)
  }

  ajouterCollegue(coll: AjoutCollegue): Promise<AjoutCollegue> {
    return this._http.post(`${URL_BACKEND}/collegues`, coll)
      .toPromise().then((c: AjoutCollegue) => c = new AjoutCollegue)
  }
}