import { Component, OnInit , EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'steps',
    styles: [require('./steps.scss')],
    template: require('./steps.html'),
})


export class StepsComponent {
    stepsArray:any[]=[];
    currentPage: any = '1';

    constructor() {
        this.stepsArray = [
            { title: "1", "content": "information", "active": "true" },
            { title: "2", "content": "Select devices", "active": "" },
            { title: "3", "content": "Set command parameter", "active": "" }
        ];

    }

    switchPage(x) {
        this.currentPage = x;
        this.stepsArray.forEach(function (v, i) {
            v.active = (x == i + 1) ? true : false;
        });
    }


    ngOnInit(){

    }

}
