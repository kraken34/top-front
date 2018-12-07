import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { AproposComponent } from './apropos/apropos.component';
import { AvisComponent } from './avis/avis.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { CollegueComponent } from './collegue/collegue.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { MenuComponent } from './menu/menu.component';
import { CollegueService } from './services/collegue.service';
import { DetailComponent } from './detail/detail.component';
import { AjouterUnCollegueComponent } from './ajouter-un-collegue/ajouter-un-collegue.component';
import { FormsModule} from '@angular/forms';
import { ScorePipe } from './pipes/score.pipe';
import { FiltrePseudoPipe } from './pipes/filtre-pseudo.pipe';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'ajouter', component: AjouterUnCollegueComponent},
  { path: '',   redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'collegue/:pseudo', component: DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    HistoriqueVotesComponent,
    AccueilComponent,
    MenuComponent,
    AproposComponent,
    DetailComponent,
    AjouterUnCollegueComponent,
    ScorePipe,
    FiltrePseudoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }