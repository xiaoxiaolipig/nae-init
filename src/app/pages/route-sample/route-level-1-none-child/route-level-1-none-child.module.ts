import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing}  from './route-level-1-none-child.routing';

import {routeLevelOneNoneChildComponent} from './route-level-1-none-child.component';


@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        routeLevelOneNoneChildComponent
    ]
})
export default class RouteLevelOneModule {
}
