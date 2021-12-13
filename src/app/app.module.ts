import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

//crear modulo llamado contadorModule con declaraciones y exportaciones

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
