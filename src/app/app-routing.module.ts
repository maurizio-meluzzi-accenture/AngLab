import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Prt012HomeComponent } from './prt.012.component/home/home.component';
import { Prt012DetailComponent } from './prt.012.component/detail/detail.component';
import { Prt012ListComponent } from './prt.012.component/list/list.component';

const routes: Routes = [
    { path: 'prt012Home', component: Prt012HomeComponent },
    { path: 'prt012Detail', component: Prt012DetailComponent },
    { path: 'prt012List', component: Prt012ListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
