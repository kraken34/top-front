import { Component } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accueil = new AccueilComponent();
}
