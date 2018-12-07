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
import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './services/collegue.service';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { MenuComponent } from './menu/menu.component';
import { CollegueDetailComponent } from './collegue-detail/collegue-detail.component';
import { FormsModule }   from '@angular/forms';
import { AjouterUnCollegueComponent } from './ajouter-un-collegue/ajouter-un-collegue.component';
import { ScorePipe } from './pipes/score.pipe';
import { FiltrerByPseudoPipe } from './pipes/filtrer-by-pseudo.pipe';

const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponent }, // /Accueil affiche le composant A

  { path: 'collegues/nouveau', component: AjouterUnCollegueComponent },

  { path: 'collegue/:pseudo', component: CollegueDetailComponent },

  { path: 'apropos', component: AproposComponent }, // /page2 affiche le composant B

  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route page1 par défaut

  { path: '**', component: PageNonTrouveeComponent } // page non trouvée
];

@NgModule({
  declarations: [
    AppComponent, BandeauComponent, CollegueComponent, AvisComponent, ListeColleguesComponent, HistoriqueVotesComponent, AccueilComponent, AproposComponent,PageNonTrouveeComponent, MenuComponent, CollegueDetailComponent, AjouterUnCollegueComponent, ScorePipe, FiltrerByPseudoPipe
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    CollegueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
