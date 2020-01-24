import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
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
<<<<<<< HEAD
=======
import { Prt009Component } from './prt.009.component/prt.009.component';
import { Prt010Component } from './prt.010.component/prt.010.component';
import { Prt011Component } from './prt.011.component/prt.011.component';

import { ProductBeMockupService } from './product-be-mockup.service';
>>>>>>> b3ffc5667da8884e3ec78829aa04ba75dc134b5a

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
<<<<<<< HEAD
    Prt008Component
=======
    Prt008Component,
    Prt009Component,
    Prt010Component,
    Prt011Component
>>>>>>> b3ffc5667da8884e3ec78829aa04ba75dc134b5a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(ProductBeMockupService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
