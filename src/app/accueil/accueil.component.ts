import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Collegue, Vote, Avis } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = 'top-collegues-front';

  constructor(private _collegueService: CollegueService) {
    this._collegueService = _collegueService;
  }

  ngOnInit() {
  }

  listeCollegues: Collegue[] = [
    new Collegue("https://cdn-images-1.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg", "Didier", 0),
    new Collegue("https://www.google.fr/imgres?imgurl=https%3A%2F%2Ffscomps.fotosearch.com%2Fcompc%2FIGS%2FIGS443%2Femploy%25C3%25A9-bureau-portable-utilisation-banque-dimage__is155-015.jpg&imgrefurl=https%3A%2F%2Fwww.fotosearch.fr%2FIGS443%2Fis155-015%2F&docid=DGZ2cIUqMtPM7M&tbnid=zcy16O0a6_1_wM%3A&vet=10ahUKEwiU9oe764XfAhWDgM4BHbdVB-EQMwhCKAUwBQ..i&w=299&h=470&bih=875&biw=1745&q=employe%20jpg&ved=0ahUKEwiU9oe764XfAhWDgM4BHbdVB-EQMwhCKAUwBQ&iact=mrc&uact=8", "Henris", 0),
    new Collegue("https://cdn-images-1.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg", "Didier", 0),
    new Collegue("https://media2.giphy.com/media/9GIS2TZzxGiL5VWHQy/200w.webp?cid=3640f6095c05338c50516d3551e2cfb3", "Henris", 0),
    new Collegue("https://cdn-images-1.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg", "Didier", 0),
    new Collegue("https://media2.giphy.com/media/9GIS2TZzxGiL5VWHQy/200w.webp?cid=3640f6095c05338c50516d3551e2cfb3", "Henris", 0)
  ];

  historiqueListe: Vote[] = [
    new Vote(this.listeCollegues[0], Avis.AIMER),
    new Vote(this.listeCollegues[1], Avis.DETESTER)
  ];

}
