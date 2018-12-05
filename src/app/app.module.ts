import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { HistoriqueVotesComponentComponent } from './historique-votes-component/historique-votes-component.component';
import { AcceuilComponentComponent } from './acceuil-component/acceuil-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './services/collegue.service';

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponentComponent,
    HistoriqueVotesComponentComponent,
    AcceuilComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
