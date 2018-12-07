import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { HistoriqueVotesComponentComponent } from './historique-votes-component/historique-votes-component.component';
import { AcceuilComponentComponent } from './acceuil-component/acceuil-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './services/collegue.service';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import {AproposComponent} from './apropos/apropos.component';
import { PageDetailsComponent } from './page-details/page-details.component';
import { AjouterUnCollegueComponent } from './ajouter-un-collegue/ajouter-un-collegue.component';
import { FormsModule }   from '@angular/forms';
import { ScorePipe } from './pipes/score.pipe';
import { FiltrePipe } from './pipes/filtre.pipe';

const appRoutes : Routes = [
  {path:'acceuil', component: AcceuilComponentComponent},
  {path:'apropos', component: AproposComponent},

  {path:'collegues/nouveau', component: AjouterUnCollegueComponent},
  {path: 'collegues/:pseudo', component: PageDetailsComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponentComponent,
    HistoriqueVotesComponentComponent,
    AcceuilComponentComponent,
    MenuComponent,
    AproposComponent,
    PageDetailsComponent,
    AjouterUnCollegueComponent,
    ScorePipe,
    FiltrePipe
   
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
