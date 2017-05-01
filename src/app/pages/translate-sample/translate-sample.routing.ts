import { Routes, RouterModule }  from '@angular/router';

import { TranslateSampleComponent } from './translate-sample.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: TranslateSampleComponent,
        children: [
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
