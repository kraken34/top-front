import { Component, OnInit } from '@angular/core';
import { CollegueAcDetails } from '../models';
import { CollegueAcDetailsService } from '../services/collegue-ac-details.service';
import { HttpResponse } from '@angular/common/http';



class ModelDeFormulaire { matricule:string; pseudo:string; lienPhoto:string; email:string}

@Component({
  selector: 'app-formulaire-creation-collegue',
  templateUrl: './formulaire-creation-collegue.component.html',
  styleUrls: ['./formulaire-creation-collegue.component.scss']
})

export class FormulaireCreationCollegueComponent implements OnInit {

  
  // la propriété monModel est mise à jour automatiquement avec la saisie utilisateur
  // grâce au binding bi-directionnel  [(ngModel)]
  modelDeFormulaire:ModelDeFormulaire = new ModelDeFormulaire();

  statusRequete:[number, string];
  
  constructor(private _collegueDetailsService:CollegueAcDetailsService) { }

  ngOnInit() {
  }


  submit() {
      console.log(this.modelDeFormulaire);

      

      this._collegueDetailsService.ajouterCollegueAcDetails(this.modelDeFormulaire.matricule,
                                                            new CollegueAcDetails(this.modelDeFormulaire.pseudo,
                                                              0,
                                                              this.modelDeFormulaire.lienPhoto,
                                                              this.modelDeFormulaire.email))
                                  .then((response:HttpResponse<any>) => {
                                                                        let stringResult:string =`Status : ${response.status}\n
                                                                                       header : ${response.headers}`;
                                                                        console.log(stringResult);
                                                                        if((response.status >= 300)){
                                                                          this.statusRequete = [1,stringResult];
                                                                        }else{
                                                                          this.statusRequete = [2,stringResult];
                                                                        }
                                                                      })
                                  .catch(err => {
                                                  let stringResult:string = `requête échouée : ${err}`;
                                                  console.log(stringResult);
                                                  this.statusRequete = [0,stringResult]
                                                })
      

      
  }

  


}
