import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Collegue } from '../models';

const URL_BACKEND = environment.backendUrl;
@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    //http://localhost:8080
    return this._http.get(URL_BACKEND + '/collegues').toPromise()
      .then((tabCol: any[]) => tabCol
        .map(col => new Collegue(col.photo, col.nom, col.score)))
  }

  // donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue[]> {
  //   return this._http.patch('http://localhost:8080/collegues').toPromise()
  //     .then()
  // }
}