import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CollegueService } from './services/collegue.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { CollegueDetailsComponent } from './collegue-details/collegue-details.component';
import { CollegueFormComponent } from './collegue-form/collegue-form.component';

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
    CollegueDetailsComponent,
    CollegueFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: 'apropos',  component:AproposComponent },
    { path: 'accueil', component:AccueilComponent},   
    { path: 'collegues/nouveau', component:CollegueFormComponent}, 
    { path: 'collegues/:pseudo', component:CollegueDetailsComponent},
    { path: '**', component:AccueilComponent}])
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
