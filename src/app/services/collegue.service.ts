import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Collegue, Avis } from '../models';



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
        new Collegue( cServeur.pseudo, cServeur.score,cServeur.imageUrl))
      );
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
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
      .then((data: any) => {
        new Collegue( data.pseudo, data.score,data.imageUrl)
        console.log(data);
      }, (error: any) => {
        console.log("error", error);
        return undefined;
      }
      );
  }
}
