// This is dashboard feature module.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from '../../dashboard/dashboard-routing.module';

import { PortalHeaderComponent } from './portal-header.component';
/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [PortalHeaderComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
  ],
  exports: [
    PortalHeaderComponent,
    DashBoardRoutingModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class PortalHeaderModule {
  
 }
