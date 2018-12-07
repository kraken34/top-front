import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule, MatInputModule, MatSelectModule, MatRadioModule} from '@angular/material';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ListeCollegueComponent } from './liste-collegue/liste-collegue.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './collegue.service';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Add2CollegueComponent } from './add2-collegue/add2-collegue.component';
import { ScorePipe } from './pipes/score.pipe';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'about', component: AboutComponent },
  { path: 'ajouter', component: Add2CollegueComponent },
  { path: 'collegues/:pseudo', component: DetailCollegueComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route page1 par défaut
  { path: '**',  component: PagenotfoundComponent }, // page non trouvée
];


@NgModule({
  declarations: [
    AppComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeCollegueComponent,
    HistoriqueVotesComponent,
    AccueilComponent,
    MenuComponent,
    AboutComponent,
    DetailCollegueComponent,
    PagenotfoundComponent,
    Add2CollegueComponent,
    ScorePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCarouselModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
