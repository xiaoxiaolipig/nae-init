
import {Routes, RouterModule} from '@angular/router';
import {PaginationComponent} from './pagintaion.component';

export const routes: Routes = [
    {
        path: '',
        component: PaginationComponent
    }
];

export const routing = RouterModule.forChild(routes);
