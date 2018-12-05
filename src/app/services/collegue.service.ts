import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Collegue, Avis, Vote, CollegueFull } from '../models';



@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    const URL_BACKEND = environment.backendUrl
    return this._http.get(URL_BACKEND.concat("/collegues"))
      .toPromise()
      .then((data: any[]) =>
        data.map(cServeur =>
          new Collegue(cServeur.pseudo, cServeur.score, cServeur.imageUrl))
      );
  }

  ColleguesByPseudo(pseudo:string): Promise<CollegueFull> {
    const URL_BACKEND = environment.backendUrl
    return this._http.get(URL_BACKEND.concat("/collegues/").concat(pseudo))
      .toPromise()
      .then((data: any) =>
        new CollegueFull(data.pseudo, data.score, data.imageUrl
          ,data.nom,data.prenom,data.email,data.adresse));
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Vote> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    const URL_BACKEND = environment.backendUrl
    return this._http.patch(
      URL_BACKEND + "/collegues/" + unCollegue.pseudo,
      {
        action: avis
      },
      httpOptions
    )
      .toPromise()
      .then((data: any) =>
        new Vote(new Collegue(data.collegue.pseudo, data.collegue.score, data.collegue.imageUrl), (data.avis === "AIMER") ? Avis.AIMER : Avis.DETESTER, data.collegue.score, data.dateVote)

      );
  }
}
