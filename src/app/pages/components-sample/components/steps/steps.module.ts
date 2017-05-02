import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing}  from './steps.routing';

import {StepsComponent} from './steps.component';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        StepsComponent
    ]
})
export class StepsModule {
}