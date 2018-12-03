import { Component } from '@angular/core';
import { Collegue, Vote, Avis } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-front';
  stephane = new Collegue(`Stephane`, 300,[`https://wallpapercave.com/wp/wp1811952.jpg`, `https://wallpapersite.com/images/pages/pic_w/1799.jpg`, `http://hdqwalls.com/wallpapers/skyscraper-movie-10k-ve.jpg`]);
  alexis = new Collegue(`Alexis`, 300,[`https://images2.alphacoders.com/485/485496.jpg`, `https://images6.alphacoders.com/485/485500.jpg`, `https://img.bfmtv.com/c/1000/600/04d3/41cde7346d5fa39b47363d6641b2.jpg`]);
  florian= new Collegue(`Florian`, 300,[`https://www.wallpapersbrowse.com/images/ne/nekogag.jpg`, `http://braindamaged.fr/wp-content/uploads/2017/04/the-expendables-4-arnold-schwarzenegger-quitte-aussi-la-franchise-une.jpg`, `https://images.alphacoders.com/294/thumb-1920-294343.jpg`]);
  matthieu=new Collegue(`Matthieu`,200,[`https://static.ladepeche.fr/content/media/image/zoom/2014/09/11/1637638-sipa-rex43064278-000001.jpg`,`http://www.nord-cinema.com/wp-content/uploads/2017/02/le-cinquieme-element.jpg`,`https://s22295.pcdn.co/wp-content/uploads/Die-Hard1.jpg`])
  expandable= [this.stephane,this.alexis,this.florian,this.matthieu];
  votes:Vote[]=[new Vote(this.stephane,Avis.AIMER),new Vote(this.florian,Avis.DETESTER)]
}
