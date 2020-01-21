import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Prt001Component } from './prt.001.component/prt.001.component';
import { Prt002Component } from './prt.002.component/prt.002.component';
import { Prt003Component } from './prt.003.component/prt.003.component';
import { Prt004Component } from './prt.004.component/prt.004.component';
import { Prt005Component } from './prt.005.component/prt.005.component';
import { Prt006Component } from './prt.006.component/prt.006.component';
import { Prt007Component } from './prt.007.component/prt.007.component';
import { Prt008Component } from './prt.008.component/prt.008.component';

@NgModule({
  declarations: [
    AppComponent,
    Prt001Component,
    Prt002Component,
    Prt003Component,
    Prt004Component,
    Prt005Component,
    Prt006Component,
    Prt007Component,
    Prt008Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
