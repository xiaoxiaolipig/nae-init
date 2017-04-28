import {Routes, RouterModule} from '@angular/router';
import {RouteLevelOneComponent} from './route-level-1.component';
import {RouteLevelOneEmptyComponent} from './route-level-1-empty.component';

export const routes: Routes = [
    {
        path: '',
        component: RouteLevelOneComponent,
        children: [
			{
			path: '',
				redirectTo: 'route-level-2',
				pathMatch: 'full'
			},
			{
			path: 'route-level-2',
			loadChildren: () => System.import('./route-level-2/route-level-2.module')
			}
        ]
    },
    {
        path: 'empty',
        component: RouteLevelOneEmptyComponent,
    }
];

export const routing = RouterModule.forChild(routes);
