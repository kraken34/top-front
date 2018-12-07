import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './services/collegue.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { DetailsComponent } from './details/details.component';
import { AjouterUnCollegueComponent } from './ajouter-un-collegue/ajouter-un-collegue.component';
import { FormsModule } from '@angular/forms';
import { ScorePipe } from './pipes/score.pipe';
import { FiltrerColleguePipe } from './pipes/filtrer-collegue.pipe';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'apropos', component: AproposComponent},
  { path: 'collegue/nouveau', component: AjouterUnCollegueComponent},
  {path:'collegue/:pseudo', component: DetailsComponent} ,
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  
];

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
    DetailsComponent,
    AjouterUnCollegueComponent,
    ScorePipe,
    FiltrerColleguePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule {}

