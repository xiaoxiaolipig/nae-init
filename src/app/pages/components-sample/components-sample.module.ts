import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';



import { ComponentsSampleComponent } from './components-sample.component';


import { routing }      from './components-sample.routing';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        ComponentsSampleComponent,
    ],
    providers: [
    ]
})
export class ComponentsSampleModule {}
