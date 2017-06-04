import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import { MetanitComponent }   from '../../metanit/metanit.component';
import { AboutComponent }   from '../../metanit/about.component';
import { HomeComponent }   from '../../metanit/home.component';
//import {IndexComponent} from "../../index/index.component";
//import {RegisterComponent} from "../../register/register.component";
//import {LoginComponent} from "../../login/login.component";


//const routes: Routes = [
//{path: 'registration', component: RegisterComponent},
//{path: '', component: IndexComponent},
//{path: 'login', component: LoginComponent}
//];

const itemRoutes: Routes = [
                            { path: 'about', component: AboutComponent},
                            { path: 'g', component: HomeComponent},
                        ];
const appRoutes: Routes =[
                          { path: 'metanit', component: MetanitComponent},
                          { path: 'metanit', component: MetanitComponent, children: itemRoutes},
                          { path: '', component: HomeComponent}

                          ];



@NgModule({
    imports: [
              CommonModule,
              RouterModule.forRoot(appRoutes)
              ],
              exports: [RouterModule],
              declarations: []
})
export class RoutingModule { }
