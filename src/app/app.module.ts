import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
