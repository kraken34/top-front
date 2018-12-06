import { Component, OnInit } from '@angular/core';

class MonForm{
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

  constructor() { }
monForm:MonForm = new MonForm();

submit(){
  console.log(this.monForm)
}


  ngOnInit() {
  }

}
