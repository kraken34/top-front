import { Injectable } from '@angular/core';
import { CollegueService } from './collegue.service';
import { CollegueAcDetails } from '../models';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';

const URL_BACKEND = environment.backendUrl;


@Injectable()
export class CollegueAcDetailsService extends CollegueService {

  constructor(protected _http:HttpClient) {super(_http) }


  ajouterCollegueAcDetails(matricule : string, collegue:CollegueAcDetails):Promise<HttpResponse<any>> {

    return this._http.post(`${URL_BACKEND}/collegues/${matricule}`, collegue)
      .toPromise()
      .then((response:HttpResponse<any>)=>response)
  }


}
