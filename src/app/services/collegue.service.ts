import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MonForm } from '../ajouter-un-collegue/ajouter-un-collegue.component';
@Injectable({
  providedIn: 'root'
})

export class CollegueService {
  private URL_BACKEND:string = environment.backendUrl;
 
  constructor(private _http:HttpClient) {
  }

  listerCollegues():Promise<Collegue[]>  {
    // récupérer la liste des collègues côté serveur
     return this._http.get(this.URL_BACKEND.concat("/collegues")).toPromise()
     .then((tabColServeur:any[]) => tabColServeur
     .map(c => new Collegue( c.pseudo,c.imageUrl, c.score, c.nom, c.prenom, c.mail, c.adresse)));
  }

  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    // TODO Aimer ou Détester un collègue côté serveur
    return this._http.patch(this.URL_BACKEND.concat("/collegues/").concat(unCollegue.pseudo),{ "action":avis.toString()},
    {headers: new HttpHeaders({ "Content-Type": "application/json"})}).toPromise().then((c:Collegue)=>c);
  }
  
  listerUnCollegue(pseudo:string):Promise<Collegue>{
    return this._http.get(this.URL_BACKEND.concat("/collegues/").concat(pseudo)).toPromise().then((c:Collegue)=>c);
  }

  ajouterUnCollegue(matricule:string, pseudo :string,imageUrl:string):Promise<MonForm>{
    return this._http.post(this.URL_BACKEND.concat("/collegues/"),{ "matricule":matricule, "pseudo":pseudo, "imageUrl":imageUrl},
    {headers: new HttpHeaders({ "Content-Type": "application/json"})}).toPromise().then((c:MonForm)=>c);
  }
}
