import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import {RadioControlValueAccessor} from "./radio_value_accessor";
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
    selector: "radioButton",
    templateUrl: 'app/radioButton/radioButton.component.html',
    
    directives: [FORM_DIRECTIVES, RadioControlValueAccessor]
})
export class RadioButtonCcomponent {
    
    model;
    abstractKTP;
    
    powers = ['Super Flexible', 'Really Smart', 
              'Super Hot', 'Weather Changer'];
    
    constructor() {
        this.model = {
                n: "1";
                sex: "female",
                sex2: "male2"
        };
        
    }
}
