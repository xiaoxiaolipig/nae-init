import {Routes, RouterModule} from '@angular/router';
import {routeLevelTwoComponent} from './route-level-2.component';

export const routes: Routes = [
    {
        path: '',
        component: routeLevelTwoComponent
    }
];

export const routing = RouterModule.forChild(routes);
