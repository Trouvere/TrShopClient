import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/common";
import { RadioControlValueAccessor } from '../radioButton/index';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AdminService } from '../service/admin.service';
import { Power } from '../models/index';
import { Router } from '@angular/router';

import { NgForm} from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component( {
    selector: "powerEdit",
    templateUrl: 'app/admin/power-edit.component.html',

    directives: [FORM_DIRECTIVES, RadioControlValueAccessor]
} )


export class PowerEditComponent implements OnInit {
powers: Power[];
selectedPower: Power;

constructor(
        private router: Router,
        private adminService: AdminService) { }

      getPowers(): void {
        this.adminService.getPowers().subscribe(( data: Response ) => {
      this.powers = data.json();
      console.log( data );
      }

      ngOnInit(): void {
        this.getPowers();
      }

      onSelect(power: Power): void {
        this.selectedPower = power;
      }

      gotoDetail(): void {
        this.router.navigate(['/detailPower', this.selectedPower.id]);
      }
    }
    

