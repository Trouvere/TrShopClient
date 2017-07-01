import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './service/http.service';

@Component({
    selector: 'my-app',
    styles:[` 
            .nav{ clear: both;}
            a {float: left;}
            .active a { color: red;}
            `],
            template: `
                <div>
                <ul class="nav">
                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                <a routerLink="">Главная</a>
                </li>
                <li routerLinkActive="active">
                <a routerLink="/metanit">metanit</a>
                </li>
                <li routerLinkActive="active">
                <a routerLink="/metz">metz</a>
                </li>
                <li routerLinkActive="active">
                <a routerLink="/radio">radio</a>
                </li>
                </ul>
                <router-outlet></router-outlet>
                </div>                
                `,
                
                
                providers: [HttpService]
})
export class AppComponent implements OnInit { 
}
