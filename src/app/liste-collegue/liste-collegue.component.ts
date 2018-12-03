import { Component, OnInit } from '@angular/core';
import { Collegue } from '../model';

@Component({
  selector: 'app-liste-collegue',
  templateUrl: './liste-collegue.component.html',
  styleUrls: ['./liste-collegue.component.css']
})

export class ListeCollegueComponent implements OnInit {

  collegues: Collegue[] = []

  constructor() { }

  refresh() {

  }

  ngOnInit() {
    this.collegues.push(new Collegue("https://media3.giphy.com/media/4j9XOYo6IVDK8/200w.gif?cid=3640f6095c014b58742f3734672e5218", "Bebert", 999))
    this.collegues.push(new Collegue("https://media1.giphy.com/media/Ja8ihKn1B3sA/200w.gif?cid=3640f6095c05262b494e73684d6320e6", "pervers34", -999))
    this.collegues.push(new Collegue("https://media1.giphy.com/media/S1FcQ3fJMz81q/200w.gif?cid=3640f6095c05278d2e6f36654d8fb03e", "travelotte4ever", -100))
    this.collegues.push(new Collegue("https://media2.giphy.com/media/d3Fym9OQ08o6agYE/200w.gif?cid=3640f6095c0527bb644d4579735f5cdf", "doggystyle", -100))
    this.collegues.push(new Collegue("https://media1.giphy.com/media/laLCSA7UdHs1q/200w.gif?cid=3640f6095c05287a2e346344778dec5d", "bisounours", -100))
    this.collegues.push(new Collegue("https://media0.giphy.com/media/I5R2abTxgU62c/200.gif?cid=3640f6095c0528bd573258356711d8ec", "cathy", -100))
    this.collegues.push(new Collegue("https://media1.giphy.com/media/110gqI69qjVAkM/200w.gif?cid=3640f6095c0528564131394b32109805", "funnyface", -100))
    this.collegues.push(new Collegue("https://media1.giphy.com/media/8qABb3dgjun8PdNirg/200w.gif?cid=3640f6095c0529ca6579497863c2fb05", "cochonou", -100))
    this.collegues.push(new Collegue("https://media1.giphy.com/media/fQQbWnU2g5OcU/200w.gif?cid=3640f6095c052a595a5379624d220236", "anonymouspresident", -100))
    this.collegues.push(new Collegue("https://media3.giphy.com/media/Pjs1kqtH1KTaU/200w.gif?cid=3640f6095c052ae5315077353248ff7b", "calins69", -100))
    this.collegues.push(new Collegue("https://media3.giphy.com/media/MxRkVKrBvfzMY/200.gif?cid=3640f6095c054dfa41536a57591da7bd", "wanker", -100))

    let i: number
    for (i = 0; i < 10; i++)
      this.collegues.push(new Collegue("https://media3.giphy.com/media/4j9XOYo6IVDK8/200w.gif?cid=3640f6095c014b58742f3734672e5218", "pseudo" + i, i))
  }
}