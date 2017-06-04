import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
 
@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }
     
    getData(){
        return this.http.get('users.json')
//        return this.http.get('http://localhost:9000/metanit/m')        
    }
}