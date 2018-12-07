import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Collegue, Avis, Vote, CollegueFull, FormCollegue } from '../models';


const URL_BACKEND = environment.backendUrl
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  responseType: 'text'
};

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    return this._http.get(URL_BACKEND.concat("/collegues"))
      .toPromise()
      .then((data: any[]) =>
        data.map(cServeur =>
          new Collegue(cServeur.pseudo, cServeur.score, cServeur.imageUrl))
      );
  }

  ColleguesByPseudo(pseudo: string): Promise<CollegueFull> {
    return this._http.get(URL_BACKEND.concat("/collegues/").concat(pseudo))
      .toPromise()
      .then((data: any) =>
        new CollegueFull(data.pseudo, data.score, data.imageUrl
          , data.nom, data.prenom, data.email, data.adresse));
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Vote> {

    return this._http.patch(
      URL_BACKEND + "/collegues/" + unCollegue.pseudo,
      {
        action: avis
      },
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        }),
      }
    )
      .toPromise()
      .then((data: any) =>
        new Vote(new Collegue(data.collegue.pseudo, data.collegue.score, data.collegue.imageUrl), (data.avis === "AIMER") ? Avis.AIMER : Avis.DETESTER, data.collegue.score, data.dateVote)

      );
  }

  CreateCollegues(form: FormCollegue): Promise<any> {
    return this._http.post(URL_BACKEND.concat("/collegues/nouveau"),
      {
        matricule: form.matricule,
        pseudo: form.pseudo,
        imgUrl: form.imgUrl
      },
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        }),
        responseType: 'text'
      })
      .toPromise()

  }
}
