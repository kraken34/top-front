import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { AvisComponent } from './avis/avis.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { CollegueComponent } from './collegue/collegue.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { CollegueService } from './services/collegue.service';



@NgModule({
  declarations: [
    AppComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    HistoriqueVotesComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }