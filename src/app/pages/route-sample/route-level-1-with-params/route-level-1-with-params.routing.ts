import {Routes, RouterModule} from '@angular/router';
import {routeLevelOneWithParamsComponent} from './route-level-1-with-params.component';

export const routes: Routes = [
    {
        path: '',
        component: routeLevelOneWithParamsComponent
    }
];

export const routing = RouterModule.forChild(routes);
