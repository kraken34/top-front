import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeCollegueComponent } from './liste-collegue/liste-collegue.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CollegueService } from './services/collegue.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import {RouterModule, Routes} from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component'

const appRoutes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'collegues/:pseudo', component: DetailsComponent},
  { path: '',   redirectTo: '/page1', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeCollegueComponent,
    HistoriqueVotesComponent,
    AccueilComponent,
    MenuComponent,
    AproposComponent,
    FooterComponent,
    DetailsComponent
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
