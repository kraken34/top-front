import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { AddCollegue } from './models_add';


@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.css']
})
export class AjouterUnCollegueComponent implements OnInit {

add:AddCollegue = new AddCollegue()

  constructor(private cs:CollegueService) { }
  ngOnInit() {
  }

  submit() {
    console.log(this.add);
    this.cs.addCollegue(this.add)
  }
}

