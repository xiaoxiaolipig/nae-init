import { Routes, RouterModule }  from '@angular/router';

import { ComponentsSampleComponent } from './components-sample.component';
import { TabsComponent } from './components/tabs/tabs.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: ComponentsSampleComponent,
        children: [

            {
                path: '',
                redirectTo: 'tabs',
                pathMatch: 'full'
            },
            {
                path: 'tabs',
                loadChildren: './components/tabs/tabs.module#TabsModule'
            },
            {
                path: 'pagination',
                loadChildren: './components/pagination/pagination.module#PaginationModule'
            }
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
