import {Routes, RouterModule}  from '@angular/router';
import {Pages} from './pages.component';
import {ModuleWithProviders} from '@angular/core';
// noinspection TypeScriptValidateTypes

import {AuthenticationService} from '../services/authentication.service';

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
    },
    {
        path: 'pages',
        component: Pages,
        canActivateChild: [AuthenticationService],
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'route-sample',
                loadChildren: './route-sample/route-sample.module#RouteSampleModule'
            },
            {
                path: 'components-sample',
                loadChildren: './components-sample/components-sample.module#ComponentsSampleModule'
            },
        ]
    }
];
//
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
