import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'route-level-1-with-params',
    encapsulation: ViewEncapsulation.None,
    template: `<h2>route-level-1-with-params:  {{params}}</h2>`
})
export class routeLevelOneWithParamsComponent {
	params: any = '';
    constructor(private route: ActivatedRoute) {
    	
    }

    ngOnInit() {
    //console.log(this.route.params);
    this.route.params
    .map(params => params['params'])
    .subscribe((params: Params) => {
        this.params = params;
      });
    
    }

}
