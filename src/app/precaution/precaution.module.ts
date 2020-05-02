import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecautionComponent } from './precaution.component';
import { DashBoardRoutingModule } from './../dashboard/dashboard-routing.module';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [PrecautionComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ],
  exports: [
    PrecautionComponent
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class PrecautionModule { }
