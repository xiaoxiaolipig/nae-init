import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing}  from './tabs.routing';

import {TabsComponent} from './tabs.component';


@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        TabsComponent
    ]
})
export class TabsModule {
}
