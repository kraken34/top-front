import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }