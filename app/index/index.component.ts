import { Component, OnInit } from '@angular/core';
import {UserinfoService} from "../service/userinfo.service";
import {Response} from "@angular/http";
import {CookieService} from "angular2-cookie/services/cookies.service";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    userName:string;

  constructor(private userInfoService:UserinfoService) { }

  ngOnInit() {
      this.userInfoService
          .getAuthUserName()
          .then((res:Response) => {
          });
  }


  getUserName(){
      this.userInfoService.getAuthUserName()
          .then((res:Response) => {
          console.log("getname");
          console.log(res);
          });
  }



}
