import {Routes, RouterModule} from '@angular/router';
import {TabsComponent} from './tabs.component';

export const routes: Routes = [
    {
        path: '',
        component: TabsComponent
    }
];

export const routing = RouterModule.forChild(routes);
