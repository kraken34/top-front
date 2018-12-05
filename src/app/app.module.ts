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

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: '',   redirectTo: 'accueil', pathMatch: 'full' },
  { path: ':pseudo', component: DetailComponent}
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
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }