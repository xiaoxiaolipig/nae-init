import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing}  from './route-level-2.routing';

import {routeLevelTwoComponent} from './route-level-2.component';


@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        routeLevelTwoComponent
    ]
})
export default class RouteLevelTwoModule {
}
