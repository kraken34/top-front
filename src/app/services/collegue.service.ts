import { Injectable } from '@angular/core';
import { Avis, Collegue } from '../models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    return this._http.get('http://localhost:8080/collegues').toPromise()
      .then((tabCol: any[]) => tabCol
        .map(col => new Collegue(col.photo, col.nom, col.score)))
  }

  // donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue[]> {

  // }
}