import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Collegue, Avis, CollegueForm} from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  private URL_BACKEND:String = environment.backendUrl;

  constructor(private _http:HttpClient) { }

  listerCollegues():Promise<Collegue[]>  {
    // récupérer la liste des collègues côté serveur
    return this._http.get(this.URL_BACKEND.concat("/collegues")).toPromise()
    .then((collegues:any[]) => collegues.map((c:Collegue) => c));
    
  }

  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    // Aimer ou Détester un collègue côté serveur
    return this._http.patch(this.URL_BACKEND.concat("/collegues/").concat(unCollegue.pseudo),
     {"action":avis.toString()},
     {headers: new HttpHeaders({"Content-Type": "application/json"})}).toPromise()
    .then((c:Collegue) => c);
  }

  detailsCollegues(pseudo:string):Promise<Collegue> {
    return this._http.get(this.URL_BACKEND.concat("/collegues/").concat(pseudo)).toPromise()
    .then((c:Collegue) => c);
  }

  creerCollegue(matricule:string, pseudo:string, imgUrl:string):Promise<CollegueForm> {
    return this._http.post(this.URL_BACKEND.concat("/collegues"),
    {"matricule":matricule, "pseudo":pseudo, "urlImage":imgUrl},
    {headers: new HttpHeaders({"Content-Type": "application/json"})}).toPromise()
    .then((c:CollegueForm) => c);
  }

}
