import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Prt012HomeComponent } from './prt.012.component/home/home.component';
import { Prt012DetailComponent } from './prt.012.component/detail/detail.component';
import { Prt012ListComponent } from './prt.012.component/list/list.component';
import { Prt001Component } from './prt.001.component/prt.001.component';
import { Prt002Component } from './prt.002.component/prt.002.component';
import { Prt003Component } from './prt.003.component/prt.003.component';
import { Prt004Component } from './prt.004.component/prt.004.component';
import { Prt005Component } from './prt.005.component/prt.005.component';
import { Prt006Component } from './prt.006.component/prt.006.component';
import { Prt007Component } from './prt.007.component/prt.007.component';
import { Prt008Component } from './prt.008.component/prt.008.component';
import { Prt009Component } from './prt.009.component/prt.009.component';
import { Prt010Component } from './prt.010.component/prt.010.component';
import { Prt011Component } from './prt.011.component/prt.011.component';
import { Prt013Component } from './prt.013.component/prt.013.component';

const routes: Routes = [
    { path: 'prt001', component: Prt001Component },
    { path: 'prt002', component: Prt002Component },
    { path: 'prt003', component: Prt003Component },
    { path: 'prt004', component: Prt004Component },
    { path: 'prt005', component: Prt005Component },
    { path: 'prt006', component: Prt006Component },
    { path: 'prt007', component: Prt007Component },
    { path: 'prt008', component: Prt008Component },
    { path: 'prt009', component: Prt009Component },
    { path: 'prt010', component: Prt010Component },
    { path: 'prt011', component: Prt011Component },
    { path: 'prt013', component: Prt013Component },
    { path: 'prt012Home', component: Prt012HomeComponent },
    { path: 'prt012Detail', component: Prt012DetailComponent },
    { path: 'prt012List', component: Prt012ListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
