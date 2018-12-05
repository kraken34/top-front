import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeCollegueComponent } from './liste-collegue/liste-collegue.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'a-propos', component: AproposComponent },
  { path: 'collegues/:id', component: DetailComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AproposComponent,
    AppComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeCollegueComponent,
    HistoriqueVotesComponent,
    AccueilComponent,
    MenuComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }