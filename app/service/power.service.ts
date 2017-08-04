import { Injectable } from '@angular/core';
//import {Http} from '@angular/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthenticationService } from './index';
import { User, Power } from '../models/index'


@Injectable()
export class PowerService {
    //    Создать сервис со всеми URL
    private powerUrl = 'http://localhost:9000/power';

    //Попробовать перенести в AuthenticationService
//    private headers = new Headers( {
//        'Content-Type': 'application/json; charset=utf-8',
//        //       'Authorization': 'Bearer ' + this.authenticationService.getToken()
//        'Authorization':  + this.authenticationService.getToken()
//    } );
//    private options = new RequestOptions( { headers: this.headers } );
//    //Попробовать перенести в AuthenticationService

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService ) {
    }

    gets() {
        //    For test
        //    return this.http.get('ModelPowers.json')
        //    For test
        //    For work        
//         let headers = ({ 'Authorization':  this.authenticationService.getToken() });
//         console.log(headers);    
//      let options = new RequestOptions({ headers: headers });    
//        return this.http.get( this.powerUrl, options );
        return this.http.get( this.powerUrl, this.authenticationService.getOptions() );

    }

    get( id: number ) {
        //  For test
        //    return this.http.get('ModelPower.json')
        //    For test
        //    For work
        return this.http.get( this.powerUrl + '/' + id, this.authenticationService.getOptions() );
    }

    save( power: Power ) {
        //  For test
        //    return this.http.post(url, body, options);
        //    For test
        //    For work
        
        const body = JSON.stringify(power);
        console.log(body); 
//        let url = this.powerUrl + '/' + power.id;
        let url = this.powerUrl;
        return this.http.post( url, body, this.authenticationService.getOptions() )
    }

    delete( id: number ) {
        //  For test
        //    return this.http.delete(url, options);
        //    For test
        //    For work
        let url = this.powerUrl + '/' + id;
      console.log(url); 
        return this.http.delete( url, this.authenticationService.getOptions())


    }
    
    

}


