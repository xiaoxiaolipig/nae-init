import {Routes, RouterModule}  from '@angular/router';
import {Pages} from './pages.component';
import {ModuleWithProviders} from '@angular/core';
// noinspection TypeScriptValidateTypes

import {AuthenticationService} from '../services/authentication.service';

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: 'app/pages/register/register.module#RegisterModule'
    },
    {
        path: 'pages',
        component: Pages,
        canActivateChild: [AuthenticationService],
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {
                path: 'dashboard',
                loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'route',
                loadChildren: 'app/pages/route-sample/route-sample.module#RouteSampleModule'
            }
        ]
    }
];
//
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
