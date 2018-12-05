import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Avis, Collegue } from '../models';

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
    return this._http.get(URL_BACKEND + '/collegues').toPromise()
      .then((tabCol: any[]) => tabCol
        .map(col => new Collegue(col.photo, col.nom, col.score)))
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    return this._http.patch(URL_BACKEND + '/collegues/'+ unCollegue.nom, {"action": avis.toString}, httpOptions)
    .toPromise().then((c: Collegue) => c)
  }
}