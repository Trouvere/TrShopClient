﻿import { Component, OnInit} from '@angular/core';



@Component({
    selector: 'admin',
//    styles:[` 
//            .nav{ clear: both;}
//            a {float: left;}
//            .active a { color: red;}
//        `],
    template: `
    <h3>metanit</h3>
        <div>
        <ul class="nav">
//        <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
//        <a routerLink="/admin/typeKTP">Главная Metanit</a>
//        </li>
        <li routerLinkActive="active">
        <a routerLink="/admin/powers">Users</a>
        </li>
        </ul>
        <router-outlet></router-outlet>
        </div>
`,
       
        

})
export class AdminComponent  { 
}
