import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';

import { BandeauComponent } from './bandeau/bandeau.component';
import { CollegueComponent } from './collegue/collegue.component';
import { AvisComponent } from './avis/avis.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent, BandeauComponent, CollegueComponent, AvisComponent, ListeColleguesComponent, HistoriqueVotesComponent, AccueilComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
