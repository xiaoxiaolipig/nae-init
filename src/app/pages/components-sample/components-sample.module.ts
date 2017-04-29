import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {SharedModule} from '../shared/shared.module';


import { ComponentsSampleComponent } from './components-sample.component';


import { routing }      from './components-sample.routing';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        ComponentsSampleComponent,
    ],
    providers: [
    ]
})
export class ComponentsSampleModule {}
