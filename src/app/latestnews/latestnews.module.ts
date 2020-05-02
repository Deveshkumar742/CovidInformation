import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsComponent } from './latestnews.component';
import { DashBoardRoutingModule } from './../dashboard/dashboard-routing.module';


/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [LatestNewsComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
  ],
  exports: [
    LatestNewsComponent
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class LatestNewsModule { }
