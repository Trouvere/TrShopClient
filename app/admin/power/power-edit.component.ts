import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/common";
import { RadioControlValueAccessor } from '../../radioButton/index';
//import { bootstrap } from '@angular/platform-browser-dynamic';
import { PowerService } from '../../service/power.service';
import { Power } from '../../models/index';
import { Router } from '@angular/router';

import { NgForm} from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component( {
    selector: "powerEdit",
    templateUrl: 'app/admin/power/power-edit.component.html',

    directives: [FORM_DIRECTIVES, RadioControlValueAccessor]
} )


export class PowerEditComponent implements ngOnInit {
powers: Power[];
selectedPower: Power;

constructor(
        private router: Router,
        private service: PowerService) { }

      getPowers(): void {
        this.service.gets().subscribe(( data: Response ) => {
      this.powers = data.json();
      console.log( data );
      }
      }

      ngOnInit(): void {

        this.getPowers();
      }

      onSelect(power: Power): void {
        this.selectedPower = power;
      }

      add(): void {
        this.router.navigate(['/admin/addPower']);
      }
      
      gotoDetail(): void {
          this.router.navigate(['/admin/detailPower', this.selectedPower.id]);
        }

      goDelete(): void {
          this.service.delete(this.selectedPower.id)
                .subscribe(( data: Response ) => {
              console.log( data );
              this.getPowers();
                } 
      
    }
}
    

