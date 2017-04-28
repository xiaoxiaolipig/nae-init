import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing}  from './route-sample.routing';

import {RouteSampleComponent} from './route-sample.component';
import {RouteLevelOneComponentComponent} 
	from './route-level-1-component/route-level-1-component.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    RouteSampleComponent,
    RouteLevelOneComponentComponent
  ]
})
export class RouteSampleModule {
}
