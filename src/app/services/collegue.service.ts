import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Collegue, Avis } from '../models';

import { environment } from '../../environments/environment'
  
// en développement, URL_BACKEND = 'http://localhost:port'
// en mode production, URL_BACKEND = 'http://adresseheroku'
const URL_BACKEND = environment.backendUrl;


@Injectable()
export class CollegueService {

  constructor(private _http:HttpClient) { }

  
  // récupérer la liste des collègues côté serveur
  listerCollegues():Promise<Collegue[]>  {

    return this._http
      .get(URL_BACKEND.concat('/collegues'), {
        observe: "response"
        // récupération de la réponse
        // response.status => statut de la réponse
        // response.body => corps de la réponse
      })
      .toPromise()
      .then((response: HttpResponse<any>) => {

        console.log(response.status);
        const tabServeur = response.body;

        return tabServeur.map(colServeur => new Collegue(colServeur.nom, colServeur.score, colServeur.lienPhoto))
       }, (error: HttpErrorResponse) => {
        console.log("error", error);
      });
      
/*
     return this._http
     .get<Collegue[]>(URL_BACKEND.concat('/collegues'))
     .toPromise();
*/
  }

  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<any>  {
    // TODO Aimer ou Détester un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this._http.patch(URL_BACKEND.concat('/collegues/').concat(unCollegue.nom).concat('/'), {"action" : avis.toString()}, httpOptions)
                    .toPromise()
                    //.then((c:Collegue) => c)


                    // .then((response: HttpResponse<any>) => {
              
                    //   console.log(response.status);
                    //   const tabServeur = response.body;
              
                    //   return tabServeur.map(colServeur => new Collegue(colServeur.nom, colServeur.lienPhoto))
                    //  }, (error: HttpErrorResponse) => {
                    //   console.log("error", error);
                    // });

  }
}
