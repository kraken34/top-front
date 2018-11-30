import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';

import { BandeauComponent } from './bandeau/bandeau.component';
import { CollegueComponent } from './collegue/collegue.component';
import { AvisComponent } from './avis/avis.component';

@NgModule({
  declarations: [
    AppComponent, BandeauComponent, CollegueComponent, AvisComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
