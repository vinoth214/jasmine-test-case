import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { SharedModule }           from '../shared/shared.module';

import { DashboardComponent }     from './dashboard.component';
import { DashboardHeroComponent } from './dashboard-hero.component';
import { HeroService } from '../model/hero.service';

const routes: Routes =  [
  { path: 'dashboard',  component: DashboardComponent },
];

@NgModule({
  imports:      [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [DashboardComponent],
  providers: [HeroService],
  declarations: [ DashboardComponent, DashboardHeroComponent ]
})
export class DashboardModule { }
