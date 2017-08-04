import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

//import { MetanitComponent } from '../../metanit/metanit.component';
//import { AboutComponent } from '../../metanit/about.component';
//import { HomeComponentMetanit } from '../../metanit/home.component';
//import { LoginMenanitComponent } from '../../metanit/loginMenanit.component';
//import {IndexComponent} from "../../index/index.component";
//import {RegisterComponent} from "../../register/register.component";
//import {LoginComponent} from "../../login/login.component";




import { AuthGuard } from '../../guard/auth.guard';
//Используется index
//import { LoginComponent } from '../../login/login.component';
//import { HomeComponent } from '../../home/home.component';
//import { RadioButtonCcomponent } from '../../radioButton/index';

//login
import { LoginMenanitComponent } from '../../login/loginMenanit.component';
//Admin
import { AdminComponent, PowerEditComponent, PowerDetailComponent } from '../../admin/index';
//metz
import { OptionKTPComponent } from '../../metz/optionKTP.component';

//const authRoutes: Routes = [
//                            { path: 'login', component: LoginComponent },
//                            { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
//                         
//                            // otherwise redirect to home
//                            { path: '**', redirectTo: 'home' }
//                       ];
//const itemRoutes: Routes = [
//                            { path: 'about', component: AboutComponent},
//                            { path: 'g', component: HomeComponentMetanit },
//                            { path: 'login', component: LoginMenanitComponent },
//                        ];

const adminRoutes: Routes = [
    { path: 'detailPower/:id', component: PowerDetailComponent },
    { path: 'powers', component: PowerEditComponent },
];
const appRoutes: Routes = [
    //                          { path: 'metanit', component: MetanitComponent},
    //                          { path: 'metanit', component: MetanitComponent, children: itemRoutes},
    //                          { path: '', component: HomeComponentMetanit }
    //                          { path: 'auth', children:authRoutes }
    //                          { path: 'login', component: LoginComponent },
        {path: 'login', component: LoginMenanitComponent },
//    { path: 'login', redirectTo: 'metanit/login' },
    //                        { path: '**', redirectTo: '/'}
//    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//    { path: 'radio', component: RadioButtonCcomponent, canActivate: [AuthGuard] }
                          { path: 'metz', component: OptionKTPComponent, canActivate: [AuthGuard] }
                          { path: 'admin', component: AdminComponent, children: adminRoutes, canActivate: [AuthGuard] }
];



@NgModule( {
    imports: [
        CommonModule,
        RouterModule.forRoot( appRoutes )
    ],
    exports: [RouterModule],
    declarations: []
} )
export class RoutingModule { }
