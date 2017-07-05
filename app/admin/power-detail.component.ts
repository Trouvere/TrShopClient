import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/common";
import { RadioControlValueAccessor } from '../radioButton/index';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AdminService } from '../service/admin.service';
import { Power } from '../models/index';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({
  selector: 'power-detail',
  templateUrl: './power-detail.component.html'

})
export class PowerDetailComponent implements OnInit {
  power: Power;

  constructor(
    private powerService: AdminService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.powerService.getPower(+params.get('id')))
      .subscribe(hero => this.power = power);
  }

  goBack(): void {
    this.location.back();
  }
}