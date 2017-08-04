import { Component, OnInit } from '@angular/core';

//import { bootstrap } from '@angular/platform-browser-dynamic';
import { Router} from '@angular/router'
import { AuthenticationService } from '../service/index';
//import { NgForm} from '@angular/forms';
//import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component( {
    selector: "my-header",
    templateUrl: 'app/headerandfooter/header.component.html',


} )


export class HeaderComponent implements ngDoCheck {
//canActivate: boolean = false;
    canActivate: boolean;   
username: String;

constructor(
        private router: Router,
        private authenticationService: AuthenticationService ) 
        {
}

ngDoCheck(): void {
    this.canActivate=this.canActivate1();
  }

      login(): void {
          this.router.navigate(['/login']);
          
      }

      logout(): void {
          this.authenticationService.logout();
          this.canActivate= false;
      }
      canActivate1(): void {
          if (localStorage.getItem('currentUser')) {
              var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
              this.username = currentUser.username;
//              console.log(currentUser.token);              
              return true;
          }
          return false;
      }


    }
    

