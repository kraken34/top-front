import { Component, OnInit } from '@angular/core';



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
  
  constructor() { }

  ngOnInit() {
  }


  submit() {
      console.log(this.modelDeFormulaire);
  }

}
