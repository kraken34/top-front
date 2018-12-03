import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeCollegueComponent } from './liste-collegue/liste-collegue.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeCollegueComponent,
    HistoriqueVotesComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
