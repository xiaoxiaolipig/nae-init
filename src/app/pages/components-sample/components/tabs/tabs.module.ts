import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing}  from './tabs.routing';

import {TabsComponent} from './tabs.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        TabsComponent
    ]
})
export class TabsModule {
}
