import { Component, OnInit } from '@angular/core';
import { Vote, Collegue, Avis } from '../model';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})

export class HistoriqueVotesComponent implements OnInit {

  listeVote: Vote[] = []

  constructor() { }

  delete(vote: Vote) {
    this.listeVote = this.listeVote.filter(item => item !== vote)
  }

  appreciation(avis: Avis) { return avis == Avis.AIMER ? "apprécié" : "détesté" }

  ngOnInit() {
    this.listeVote.push(new Vote(new Collegue("https://media3.giphy.com/media/MxRkVKrBvfzMY/200.gif?cid=3640f6095c054dfa41536a57591da7bd", "col1", 50), Avis.AIMER))
    this.listeVote.push(new Vote(new Collegue("https://media1.giphy.com/media/xe9csf50g4SqY/200.gif?cid=3640f6095c052ae5315077353248ff7b", "col2", 50), Avis.AIMER))
    this.listeVote.push(new Vote(new Collegue("https://media1.giphy.com/media/Ja8ihKn1B3sA/200w.gif?cid=3640f6095c05262b494e73684d6320e6", "col3", 50), Avis.DETESTER))
    this.listeVote.push(new Vote(new Collegue("https://media1.giphy.com/media/fQQbWnU2g5OcU/200w.gif?cid=3640f6095c052a595a5379624d220236", "col4", 50), Avis.AIMER))
    this.listeVote.push(new Vote(new Collegue("https://media3.giphy.com/media/Pjs1kqtH1KTaU/200w.gif?cid=3640f6095c052ae5315077353248ff7b", "col5", 50), Avis.AIMER))
  }
}