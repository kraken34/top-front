import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';
import { AppComponent } from './app.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { HistoriqueVotesComponentComponent } from './historique-votes-component/historique-votes-component.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { MenuComponent } from './menu/menu.component';
import { CollegueService } from './services/collegue.service';
import { TitreComponent } from './titre/titre.component';
import {AproposComponent} from './apropos/apropos.component'

import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { AjoutcollegueComponent } from './ajoutcollegue/ajoutcollegue.component';
import { ScorePipe } from './pipes/score.pipe';
import { FiltrecolleguePipe } from './pipes/filtrecollegue.pipe';



const appRoutes: Routes = [ 

  { path: "accueil", component: AccueilComponentComponent }, 

  { path: "apropos", component: AproposComponent }, 

  { path: "detail/:pseudo", component: DetailComponent } ,  

  { path : "ajouter", component : AjoutcollegueComponent}


  /*{ path: "", redirectTo: "/accueil", pathMatch: "full" }, 

  { path: "**", redirectTo: "/accueil", pathMatch: "full" } // page non trouvée */

]; 


@NgModule({
  declarations: [
    AppComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponentComponent,
    TitreComponent,
    HistoriqueVotesComponentComponent,
    AccueilComponentComponent,
    MenuComponent,

    AproposComponent,

    DetailComponent,
    AjoutcollegueComponent,
    ScorePipe,
  
    FiltrecolleguePipe

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

