import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import {User} from './user';

@Component({
    selector: 'my-app',
    template: `<ul>
        <li *ngFor="let user of users">
        <p>Имя пользователя: {{user.name}}</p>
        <p>Возраст пользователя: {{user.age}}</p>
        </li>
        </ul>`,
        
        providers: [HttpService]
})
export class AppComponent implements OnInit { 
    users1 =  
        [   {
               "name": "Bob",
               "age": 28
           },
           {
               "name": "Tom",
               "age": 45
           },
           {
               "name": "Alice",
               "age": 32
           }
       ];
    
    users: User[]=[];
//    users1: User[]=[];
constructor(private httpService: HttpService){}
ngOnInit(){
    
this.httpService.getData()
    .subscribe((data: Response) => { this.users=data.json();
        console.log(data);    };
//this.httpService.getData()
//.subscribe((data: Response) => console.log(data) );
//  console.log(data);
}

}