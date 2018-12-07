import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis, Vote } from '../model';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CollegueService {

  lastAvisSubject = new Subject<Vote>()

  constructor(private _http: HttpClient) { }

  listerCollegues(): Observable<Collegue[]> {
    return this._http.get(environment.backendUrl + "collegues").pipe(map((tabColServeur: any[]) => tabColServeur.map(cServeur => new Collegue(cServeur.nom, cServeur.prenom, cServeur.pseudo, cServeur.email, cServeur.adresse, cServeur.score, cServeur.photo))));
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Observable<Collegue> {
    const jsonAvis = { "action": avis == Avis.AIMER ? "AIMER" : "DETESTER" }

    return this._http.patch(environment.backendUrl + "collegues/" + unCollegue.pseudo, jsonAvis).pipe(
      map((collegue: any) => new Collegue(collegue.nom, collegue.prenom, collegue.pseudo, collegue.email, collegue.adresse, collegue.score, collegue.photo)))
  }

  getCollegue(pseudo: string): Observable<Collegue> {
    return this._http.get(environment.backendUrl + "collegues/" + pseudo).pipe(
      map((collegue: any) => new Collegue(collegue.nom, collegue.prenom, collegue.pseudo, collegue.email, collegue.adresse, collegue.score, collegue.photo)))
  }

  exists(matricule: string, pseudo: string, photo: string): Observable<any> {
    return this._http.post(environment.backendUrl + "collegues", { matricule, pseudo, photo }, { observe: "response" })
  }
}