import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant A

  { path: 'apropos', component: AproposComponent }, // /page2 affiche le composant B

  { path: 'collegues/:pseudo', component: DetailsComponent},

  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponentComponent,
    HistoriqueVotesComponent,
    MenuComponent,
    AccueilComponent,
    AproposComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
