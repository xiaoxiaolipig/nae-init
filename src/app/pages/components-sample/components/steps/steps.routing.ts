import {Routes, RouterModule} from '@angular/router';
import {StepsComponent} from './steps.component';


export const routes: Routes = [
    {
        path: '',
        component: StepsComponent
    }
];

export const routing = RouterModule.forChild(routes);