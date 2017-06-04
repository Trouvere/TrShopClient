import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';

import {RoutingModule} from './module/routing/routing.module';


import { MetanitComponent }   from './metanit/metanit.component';
import { AboutComponent }   from './metanit/about.component';
import { HomeComponent }   from './metanit/home.component';

import { HttpModule }   from '@angular/http';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule,
                    RoutingModule],
                    
    declarations: [ AppComponent, HomeComponent, AboutComponent, MetanitComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }