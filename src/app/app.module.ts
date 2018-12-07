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
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule }   from '@angular/forms';
import { ScorePipe } from './pipes/score.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'a-propos', component: AproposComponent },
  { path: 'nouveau', component: FormulaireComponent },
  { path: 'collegues/:id', component: DetailComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: PageNonTrouveeComponent }
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
    DetailComponent,
    PageNonTrouveeComponent,
    FormulaireComponent,
    ScorePipe,
    FilterPipe,
    VotreDernierAvisComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }