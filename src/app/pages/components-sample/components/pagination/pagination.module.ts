/**
 * Created by xiaoxiao on 5/1/17.
 */
import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing}  from './pagination.routing';

import {PaginationComponent} from './pagintaion.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        PaginationComponent
    ]
})
export class PaginationModule {
}
