import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class HttpService{
    public token: string;
//private headers = new Headers({'content-type': 'application/json',
//    'Authorization':  this.token});

constructor(private http: Http){ }

getData(){
//  return this.http.get('users.json')
    console.log(this.token); 
  let headers = ({ 'Authorization':  this.token }); 
    let options = new RequestOptions({ headers: headers });    
    return this.http.get('http://localhost:9000/metanit/m', options )
}

getKTPAllField(){
    return this.http.get('KTPAllField.json')
//      console.log(this.token); 
  //  let headers = ({ 'Authorization':  this.token }); 
//      let options = new RequestOptions({ headers: headers });    
//      return this.http.get('http://localhost:9000/metanit/m', options )
  }


login(username: string, password: string): Observable {
    const body = { username: username, password: password };
    let headers = new Headers({ "Content-Type": "application/json; charset=utf-8" });
    return this.http.post('http://localhost:9000/auth',  body  ) 
    .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
            // set token property
            this.token = token;
            
            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
            
            // return true to indicate successful login
//          return true;
            
            return token; 
        } else {
            // return false to indicate failed login
            return false;
        }
    });
}



}