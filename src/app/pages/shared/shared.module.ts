import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import {TabsComponent} from './components/nae-tabs/nae-tabs.component';
import {ProcessStepsComponent} from "./components/component-process-steps/component-process-steps";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        TabsComponent,
        ProcessStepsComponent
    ],
    exports: [
        TabsComponent,
        ProcessStepsComponent
    ]
})

export class SharedModule {
}
