import {Routes, RouterModule} from '@angular/router';
import {routeLevelOneNoneChildComponent} from './route-level-1-none-child.component';

export const routes: Routes = [
    {
        path: '',
        component: routeLevelOneNoneChildComponent
    }
];

export const routing = RouterModule.forChild(routes);
