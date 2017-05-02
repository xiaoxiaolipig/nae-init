import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { TabsComponent } from './components/nae-tabs/nae-tabs.component';
import { PaginationComponent } from './components/component-pagination/component-pagination.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        TabsComponent,
        PaginationComponent,
    ],
    exports: [
        TabsComponent,
        PaginationComponent,
    ]
})

export class SharedModule {
}
