import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/common";
import { RadioControlValueAccessor } from '../../radioButton/index';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { PowerService } from '../../service/power.service';
import { Power } from '../../models/index';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'power-detail',
  templateUrl: 'app/admin/power/power-detail.component.html'

})
export class PowerDetailComponent implements OnInit {
  power: Power;


  constructor(
    private service: PowerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
 
      
    this.route.paramMap
      .switchMap((params: ParamMap) => 
      
      this.service.get(params.get('id')))
      .subscribe(( data: Response ) => {
          this.power = data.json();
          console.log( data );
          } 
      


      }
  
  goBack(): void {
    this.location.back();
  }
  goSave(): void {
      this.service.save(this.power)
                  .subscribe(( data: Response ) => {
          console.log( data );
                  }
              }
  goDelete(): void {
      this.service.delete(this.power.id)
            .subscribe(( data: Response ) => {
          console.log( data );
            }
            setTimeout(() => {
                this.location.back();
              }, 1000);
}