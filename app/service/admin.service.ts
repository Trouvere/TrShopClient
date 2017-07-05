import {Injectable} from '@angular/core';
//import {Http} from '@angular/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AdminService{


getPowers(){
    return this.http.get('ModelPower.json')

  }


l
}



}