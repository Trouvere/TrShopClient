import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/common";
import { RadioControlValueAccessor } from '../radioButton/index';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HttpService } from '../service/http.service';
import { ModelKTPAllField } from './modelKTPAllField';
import { ModelKTP } from './modelKTP';

//import { ModelKTPAllField, ModelKTP } from '../models/index';

import { NgForm} from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component( {
    selector: "optionKTP",
    templateUrl: 'app/metz/optionKTP.component.html',

    directives: [FORM_DIRECTIVES, RadioControlValueAccessor]
} )

//@Injectable()
export class OptionKTPComponent implements OnInit {

    modelKTPAllField: ModelKTPAllField;
    modelKTP: ModelKTP;
    //modelKTP = new ModelKTP ('KTPP', 18);
    model;
    abstractKTP;

    //    powers;
    powers = ['Super Flexible', 'Really Smart',
        'Super Hot', 'Weather Changer'];

    typeKTPAllField;
    powerAllField;
    submitted = false;
    myForm : FormGroup;
    constructor( private httpService: HttpService ) {
        this.myForm = new FormGroup({
            
            "typeKTP": new FormControl("", Validators.required),
            "power": new FormControl("", Validators.required)
            
        });
        
        this.model = {
            n: "1";
            sex: "female",
            sex2: "male2"
        };
        
        this.modelKTP = {
            typeKTP: "";
            power: null
        };

    }

    get diagnostic() { return JSON.stringify( this.model ); }

    get diagnosticModelKT() { return JSON.stringify( this.modelKTP ); }
    
    submit(form: NgForm){
        this.submitted = true;
        
        console.log(this.myForm);
        console.log(this.myForm.invalid);
        console.log(this.modelKTP);   
    }


    ngOnInit() {
        this.httpService.getKTPAllField()
            .subscribe(( data: Response ) => {
                this.modelKTPAllField = data.json();
                console.log( data );
                console.log( this.modelKTPAllField );

                this.typeKTPAllField = this.modelKTPAllField.typeKTPAllField;
                this.powerAllField = this.modelKTPAllField.powerAllField;

                console.log( this.powers );
                console.log(this.myForm);
            };
    }
}
