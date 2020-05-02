// This is dashboard feature module.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { DashBoardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { DistrictviewComponent } from './districtview/districtview.component';
/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [DashboardComponent, DistrictviewComponent],
  imports: [
    CommonModule,
    LoginModule,
    DashBoardRoutingModule,
  ],
  exports: [
    DashboardComponent,
    DistrictviewComponent,
    DashBoardRoutingModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class DashboardModule {
  
 }
