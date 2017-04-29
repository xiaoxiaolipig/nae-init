import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing}  from './route-level-1-with-params.routing';

import {routeLevelOneWithParamsComponent} from './route-level-1-with-params.component';


@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        routeLevelOneWithParamsComponent
    ]
})
export class routeLevelOneWithParamsModule {
}
