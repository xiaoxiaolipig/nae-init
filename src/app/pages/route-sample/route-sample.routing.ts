import {Routes, RouterModule} from '@angular/router';

import {RouteSampleComponent} from './route-sample.component';

import {RouteLevelOneComponentComponent} from './route-level-1-component/route-level-1-component.component';

export const routes: Routes = [
  {
    path: '',
    component: RouteSampleComponent,
    children: [

      {
        path: '',
        redirectTo: 'route-level-1',
        pathMatch: 'full'
      },
      {
        path: 'route-level-1',
        loadChildren: './route-level-1/route-level-1.module#RouteLevelOneModule'
      },
      {
        path:'route-level-1-component',
        component: RouteLevelOneComponentComponent
      },

      {
        path: 'route-level-1-none-child',
        loadChildren: './route-level-1-none-child/route-level-1-none-child.module#RouteLevelOneModule'
      },
      {
        path: 'route-level-1-with-params/:params',
        loadChildren: './route-level-1-with-params/route-level-1-with-params.module#routeLevelOneWithParamsModule'
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
