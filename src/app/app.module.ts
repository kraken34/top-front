import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { HistoriqueVoteComponent } from './historique-vote/historique-vote.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CollegueService } from './services/collegue.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { MenuComponent } from './menu/menu.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { FormulaireCreationCollegueComponent } from './formulaire-creation-collegue/formulaire-creation-collegue.component';
import { FormsModule } from '@angular/forms';
import { CollegueAcDetailsService } from './services/collegue-ac-details.service';
import { ScorePipe } from './pipes/score.pipe';
import { FiltreColleguesPipe } from './pipes/filtre-collegues.pipe';

const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponent }, 

  { path: 'apropos', component: AProposComponent }, 

  { path: 'collegues/:nom', component: DetailCollegueComponent },

  { path: 'nouveau', component: FormulaireCreationCollegueComponent }, 

  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route page1 par défaut

  // { path: '**',  component: PageNonTrouveeComponent } // page non trouvée
];

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponent,
    HistoriqueVoteComponent,
    AccueilComponent,
    AProposComponent,
    MenuComponent,
    DetailCollegueComponent,
    FormulaireCreationCollegueComponent,
    ScorePipe,
    FiltreColleguesPipe
  ],

  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule
  ],

  providers: [CollegueService, CollegueAcDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
