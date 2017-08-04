import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { ReactiveFormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import {RoutingModule} from './module/routing/routing.module';


//import { MetanitComponent }   from './metanit/metanit.component';
//import { AboutComponent }   from './metanit/about.component';
//import { HomeComponentMetanit }   from './metanit/home.component';
//import { LoginMenanitComponent }   from './metanit/loginMenanit.component';
import { LoginMenanitComponent }   from './login/loginMenanit.component';
//Authentication 
import { AuthGuard } from './guard/auth.guard';
//Используется index
import { AuthenticationService, UserService, PowerService, KTPService } from './service/index';
//import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';

import { RadioButtonCcomponent, RadioControlValueAccessor } from './radioButton/index';

//metz
import { OptionKTPComponent } from './metz/index';
import { HeaderComponent } from './headerandfooter/index';

import { AdminComponent, PowerDetailComponent, PowerEditComponent, PowerNewComponent} from './admin/index';
////used to create fake backend
//import { fakeBackendProvider } from './backend/fake-backend';
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http'



@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule,
                    RoutingModule, ReactiveFormsModule],
                    
    declarations: [ AppComponent,
//                    HomeComponentMetanit, AboutComponent, MetanitComponent,
//                    LoginComponent,
//                    HomeComponent,
                    LoginMenanitComponent,
                    RadioButtonCcomponent, RadioControlValueAccessor,
                    OptionKTPComponent, 
                    HeaderComponent,
                    AdminComponent, PowerDetailComponent, PowerEditComponent, PowerNewComponent
                    ],
                    
                    providers: [
                                AuthGuard,
                                AuthenticationService,
                                UserService,
                                
                                PowerService, KTPService
                         
                                // providers used to create fake backend
//                                fakeBackendProvider,
//                                MockBackend,
//                                BaseRequestOptions
                            ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }