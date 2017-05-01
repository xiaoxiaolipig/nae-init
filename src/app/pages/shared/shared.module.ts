import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import {TabsComponent} from './components/nae-tabs/nae-tabs.component';

// pipes
import {TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './pipes/translate';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        TabsComponent,
        TranslatePipe,
    ],
    providers: [ TRANSLATION_PROVIDERS, TranslateService ],

    exports: [
        TabsComponent,
        TranslatePipe,
    ]
})

export class SharedModule {
}
