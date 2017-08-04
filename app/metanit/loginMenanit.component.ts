import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthenticationService } from '../service/index';

@Component( {
    moduleId: module.id,
    templateUrl: 'loginMenanit.component.html'
} )

export class LoginMenanitComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    tok: any = {};

    constructor(
        //        private router: Router,
        private authenticationService: AuthenticationService
        private location: Location
    ) { }

    ngOnInit() {
        // reset login status
        //        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login( this.model.username, this.model.password )
            .subscribe( result => {
                console.log( result );
                if ( result == true ) {
                    // login successful
                    this.location.back();
                    //                this.router.navigate(['/']);
                    console.log( '1' );
                } else {
                    console.log( '2' );
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }, error => {

                    if ( error == 'Unauthorized' ) {
                        this.error = 'Username or password is incorrect';
                        console.log( '5' );
                    } else {
                        this.error = error;
                    }
                    this.loading = false;
                    console.log( error,  this.error);
                } );

    });
}
//        .subscribe((data: Response)) => {
////        console.log(data); 
////        console.log(this.tok.token); 
//        };
//    }
}
