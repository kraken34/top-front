import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Router } from '@angular/router';

export class MonForm{
  matricule:string;
  pseudo:string;
  imageUrl:string;
}
@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.css']
})
export class AjouterUnCollegueComponent implements OnInit {
  ajouterUnCollegue: any;


  constructor(private _serv: CollegueService, private routerCol : Router) { }
monForm:MonForm = new MonForm();

submit(){
  console.error(this.monForm.imageUrl)
  this._serv.ajouterUnCollegue(this.monForm.matricule, this.monForm.pseudo,this.monForm.imageUrl)
  .then(()=>this.routerCol.navigate(["acceuil"]));
}


  ngOnInit() {
   
  }


}
