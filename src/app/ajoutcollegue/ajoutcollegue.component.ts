import { Component, OnInit } from '@angular/core';
import { CollegueForm } from '../models';


@Component({
  selector: 'app-ajoutcollegue',
  templateUrl: './ajoutcollegue.component.html',
  styleUrls: ['./ajoutcollegue.component.css']
})
export class AjoutcollegueComponent implements OnInit {

  ajoutCollegue : CollegueForm = new CollegueForm()


  ngOnInit() {

  }

  submit() {
    console.log(this.ajoutCollegue)
  }

 activerBouton(){

 }

}

  

