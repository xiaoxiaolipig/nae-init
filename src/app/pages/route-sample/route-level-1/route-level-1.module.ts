import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing}  from './route-level-1.routing';

import {RouteLevelOneComponent} from './route-level-1.component';
import {RouteLevelOneEmptyComponent} from './route-level-1-empty.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        RouteLevelOneComponent,
        RouteLevelOneEmptyComponent
    ]
})
export default class RouteLevelOneModule {
}
