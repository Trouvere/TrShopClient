import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService} from '../service/http.service';

@Component({
    moduleId: module.id,
    templateUrl: 'loginMenanit.component.html'
})

export class LoginMenanitComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    tok: any = {};

    constructor(
//        private router: Router,
        private authenticationService: HttpService) { }

    ngOnInit() {
        // reset login status
//        this.authenticationService.logout();
    }

    login(username: string, password: string) {
        this.authenticationService.login(username, password)
        .subscribe((data: Response)) => {
        console.log(data); 
//        console.log(this.tok.token); 
        };
    }
}
