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
import { DetailsComponent } from './details/details.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { AjouterUnCollegueComponent } from './ajouter-un-collegue/ajouter-un-collegue.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'ajouteruncollegue', component: AjouterUnCollegueComponent},
  {path: 'collegues/:pseudo', component: DetailsComponent},
  { path: '',   redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**',  component: PageNonTrouveeComponent }
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
    DetailsComponent,
    PageNonTrouveeComponent,
    AjouterUnCollegueComponent
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
