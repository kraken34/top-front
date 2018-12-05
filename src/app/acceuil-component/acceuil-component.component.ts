import { Component, OnInit } from '@angular/core';
import { Collegue, Vote, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';


@Component({
  selector: 'app-acceuil-component',
  templateUrl: './acceuil-component.component.html',
  styleUrls: ['./acceuil-component.component.css']
})
export class AcceuilComponentComponent implements OnInit {

  constructor(private _colSrv:CollegueService, private _voteSrv:CollegueService ) { }

  ngOnInit() {
    this._colSrv.listerCollegues()
      .then(tab => this.tabCollegue = tab)
  }
  objCollegue = new Collegue("https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg", "SUPERPSEUDO", 120)
  tabCollegue:Collegue[] = []
  tabVote:Vote[] = [new Vote(new Collegue("https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg", "SUPERPSEUDO", 120), Avis.AIMER),
  new Vote(new Collegue("https://www.gettyimages.fr/gi-resources/images/Embed/new/embed2.jpg", "Collegue_1", 140), Avis.DESTESTER)] 
}
