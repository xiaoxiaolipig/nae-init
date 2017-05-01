import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import { TranslateSampleComponent } from './translate-sample.component';


import { routing }      from './translate-sample.routing';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
    ],
    declarations: [
        TranslateSampleComponent,
    ],
    providers: [
    ]
})
export class TranslateSampleModule {}
