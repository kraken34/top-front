import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { FormInput } from './model';



@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.scss']
})
export class AjouterUnCollegueComponent implements OnInit {

  titre:string = "Ajoute un pote";

  formInput = new FormInput();


  constructor(private cService:CollegueService) {
    
  }

  submit() {
    console.log(this.formInput)
    this.cService.sendInput(this.formInput)
  }

  ngOnInit() {
  }

}
