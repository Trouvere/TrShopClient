import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './service/http.service';

@Component( {
    selector: 'my-app',
    styles: [` 
             .nav{ clear: both;}
             a {float: left;}
             .active a { color: red;}
             `],
             template: `
                 
                 <header>
                 <my-header></my-header>
                 </header>
                 
                 <div>
                 <ul class="nav">
                 <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                 <a routerLink="">Главная</a>
                 </li>

                 <li routerLinkActive="active">
                 <a routerLink="/metz">Выбор КТП</a>
                 </li>
       
                 <li routerLinkActive="active">
                 <a routerLink="/admin">admin</a>
                 </li>
                 </ul>
                 <router-outlet></router-outlet>
                 </div>
                 <footer>
                 Copyright Мишин Алексей
                 </footer>                
                 `,
                 
                 
                 providers: [HttpService]
} )
export class AppComponent implements OnInit {
}
