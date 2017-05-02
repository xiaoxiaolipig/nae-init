import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import {TabsComponent} from './components/nae-tabs/nae-tabs.component';
import {PaginationComponent} from './components/component-pagination/component-pagination.component';

// pipes
import {TRANSLATION_PROVIDERS, TranslatePipe, TranslateService}   from './pipes/translate';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        TabsComponent,
        PaginationComponent,
        TranslatePipe,
    ],
    providers: [
        TRANSLATION_PROVIDERS, TranslateService
    ],
    exports: [
        TabsComponent,
        PaginationComponent,
        TranslatePipe,
    ]
})

export class SharedModule {
}
