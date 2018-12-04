import { Component, OnInit } from '@angular/core';
import { Collegue, Vote, HistoriqueVotes } from '../models';
import { CollegueService } from '../services/collegue.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {


  title:string; 

  listeColleguesExemple:Collegue[];

  constructor(private _collegueService:CollegueService) { }

  //collegueMario:Collegue = new Collegue("Mario","https://www.salford.ac.uk/__data/assets/image/0008/890072/varieties/lightbox.jpg");

  // listeColleguesExemple:Collegue[] = [
  //   this.collegueMario,
  //   new Collegue("Chris Sharma","http://image2.redbull.com/rbcom/010/2015-04-09/1331716034694_2/0010/1/1500/1000/2/chris-sharma-makes-the-first-ascent-of-el-bon-combat-near-barcelona-spain.jpg"),
  //   new Collegue("Maja Vidmar","http://fr.belclimb.be/uploads/maya-vidmar02.jpg"),
  //   new Collegue("Seb Bouin","https://www.matahijuice.com/wp-content/uploads/2017/10/seb-bouin-matahi.jpg"),
  //   new Collegue("Sasha Digiulian","https://www.grimper.com/media/news/janvier%202014/sasha.jpg"),
  //   new Collegue("Dave Graham", "https://c1.staticflickr.com/7/6125/5958326452_4f80086fa2_b.jpg"),
  //   new Collegue("The one", "http://blog.roddet.com/images/photo.jpeg"),
  //   new Collegue("Nina Caprez", "https://images.arcteryx.com/athletes/large/NinaCaprez_Oliana_5.jpg"),
  //   new Collegue("Adam Ondra","https://www.climbing.com/.image/t_share/MTM5MTA4OTk1NjcwNjE1MTEy/noble_adam_ondra_climbing_357_gnjpg.jpg")
  // ]
  

  historiqueVotes:HistoriqueVotes=new HistoriqueVotes();

  

  ngOnInit() {
   this.title = 'top-collegues-front'; 
   this._collegueService.listerCollegues().then(tabCollegues => this.listeColleguesExemple = tabCollegues);

  }

}
