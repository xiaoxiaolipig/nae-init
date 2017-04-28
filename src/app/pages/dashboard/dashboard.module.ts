import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import {SharedModule} from '../shared/shared.module';


import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    SharedModule,
    routing
  ],
  declarations: [
    Dashboard
  ],
  providers: [
  ]
})
export class DashboardModule {}
