import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis } from '../models';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddCollegue } from '../ajouter-un-collegue/models_add';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'my-auth-token'
  })
};

@Injectable(
)
export class CollegueService {

  constructor(private _http:HttpClient) { }


  listerCollegues():Promise<Collegue[]>  {
    // récupérer la liste des collègues côté serveur
    return this._http.get(environment.backendUrl +'/collegue').toPromise()
    .then((tabColServeur:any[]) => tabColServeur.map(coco => new Collegue(coco.pseudo, coco.score, coco.imageUrl,coco.nom, coco.prenom, coco.adresse, coco.email)))
  }


  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    // Aimer ou Détester un collègue côté serveur
    
    return this._http.patch(`${environment.backendUrl}/collegue/${unCollegue.pseudo}`, {"action":avis}, httpOptions)
    .toPromise().then((c:Collegue) => c)  
  }
  
  chercherParPseudo(pseudo:String):Observable<Collegue> {
    return this._http.get<Collegue>(`${environment.backendUrl}/collegue/${pseudo}`)
  }

  addCollegue(addCollegue:AddCollegue):Promise<AddCollegue>  {
    
    return this._http.post(`${environment.backendUrl}/collegue`, addCollegue, httpOptions)
    .toPromise().then((c: AddCollegue) => c = new AddCollegue)  
  }

}

