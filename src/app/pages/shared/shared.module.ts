import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import {TabsComponent} from './components/nae-tabs/nae-tabs.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        TabsComponent,
    ],
    exports: [
        TabsComponent,
    ]
})

export class SharedModule {
}
