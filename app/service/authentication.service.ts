import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import '../rxjs-extensions';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor( private http: Http ) {
        // set token if saved in local storage
        var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
        this.token = currentUser && currentUser.token;
    }

    login( username: string, password: string ): Observable {
        const body = { username: username, password: password };
        let headers = new Headers( { "Content-Type": "application/json; charset=utf-8" } );
        return this.http.post( 'http://localhost:9000/auth', body )
            .map(( response: Response ) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if ( token ) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem( 'currentUser', JSON.stringify( { username: username, token: token } ) );

                    // return true to indicate successful login
                    return true;

                    //                return token; 
                } else {
                    // return false to indicate failed login
                    return false;
                }
            } )
            .catch(( error: any ) => Observable.throw( error.json().error || 'Server error' ) );

        //        .catch((error: any)  => { console.log(error);
        //        Observable.throw(error.json().error || 'Server error'));
        //                 }
        //
        //        })
    }


    //        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    //            .map((response: Response) => {
    //                // login successful if there's a jwt token in the response
    //                let token = response.json() && response.json().token;
    //                if (token) {
    //                    // set token property
    //                    this.token = token;

    // store username and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify( { username: username, token: token } ));
    //
    //                    // return true to indicate successful login
    //                    return true;
    //                } else {
    //                    // return false to indicate failed login
    //                    return false;
    //                }
    //            });
    //    }

    getToken(): String {
        var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
        var token = currentUser && currentUser.token;
//        console.log(currentUser); 
        console.log(currentUser.token); 
        console.log(currentUser.username); 
//      console.log(token); 
        return token ? token : "";
    }
    
    getOptions(): String {
        let headers = ({"Content-Type": "application/json; charset=utf-8"; 'Authorization':  this.getToken() });
       let options = new RequestOptions({ headers: headers });  
        return options;
    }
    
    
    getUsername(): String {
        var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
        var username = currentUser.username;
        return username ? username : "";
    }
    getRole(): String {
//        var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
//        var username = currentUser.username;
//        return username ? username : "";
    } 
    

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem( 'currentUser' );
    }
}