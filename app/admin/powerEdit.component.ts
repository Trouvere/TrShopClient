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
    templateUrl: 'app/admin/powerEdit.component.html',

    directives: [FORM_DIRECTIVES, RadioControlValueAccessor]
} )

//@Injectable()
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
    
//    submitted = false;
//    myForm : FormGroup;
//    constructor( private httpService: HttpService ) {
//        this.myForm = new FormGroup({
//            
//            "typeKTP": new FormControl("", Validators.required),
//            "power": new FormControl("", Validators.required)
//            
//        });
//        
//        this.model = {
//            n: "1";
//            sex: "female",
//            sex2: "male2"
//        };
//        
//        this.modelKTP = {
//            typeKTP: "";
//            power: null
//        };
//
//    }
//
//    get diagnostic() { return JSON.stringify( this.model ); }
//
//    get diagnosticModelKT() { return JSON.stringify( this.modelKTP ); }
//    
//    submit(form: NgForm){
//        this.submitted = true;
//        
//        console.log(this.myForm);
//        console.log(this.myForm.invalid);
//        console.log(this.modelKTP);   
//    }
//
//
//    ngOnInit() {
//        this.httpService.getKTPAllField()
//            .subscribe(( data: Response ) => {
//                this.modelKTPAllField = data.json();
//                console.log( data );
//                console.log( this.modelKTPAllField );
//
//                this.typeKTPAllField = this.modelKTPAllField.typeKTPAllField;
//                this.powerAllField = this.modelKTPAllField.powerAllField;
//
//                console.log( this.powers );
//                console.log(this.myForm);
//            };
//    }
//}
