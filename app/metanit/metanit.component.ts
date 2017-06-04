import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './service/http.service';

@Component({
    selector: 'metanit',
//    styles:[` 
//            .nav{ clear: both;}
//            a {float: left;}
//            .active a { color: red;}
//        `],
    template: `
        <div>
        <ul class="nav">
        <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
        <a routerLink="/metanit/g">Главная Metanit</a>
        </li>
        <li routerLinkActive="active">
        <a routerLink="/metanit/about">Users</a>
        </li>
        </ul>
        <router-outlet></router-outlet>
        </div>
`,
       
        

})
export class MetanitComponent  { 
}
