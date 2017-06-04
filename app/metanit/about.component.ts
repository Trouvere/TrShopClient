import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from '../service/http.service';

@Component({
    selector: 'about-app',
    template: `
        
        <h3>О сайте</h3>
        <ul>
        <li *ngFor="let user of users">
        <p>Имя пользователя: {{user.name}}</p>
        <p>Возраст пользователя: {{user.age}}</p>
        </li>
        </ul>`
})
export class AboutComponent  implements OnInit { 
    
    
    users: User[]=[];

constructor(private httpService: HttpService){}
ngOnInit(){
    
    this.httpService.getData()
    .subscribe((data: Response) => { this.users=data.json();
    console.log(data);    };
}
}