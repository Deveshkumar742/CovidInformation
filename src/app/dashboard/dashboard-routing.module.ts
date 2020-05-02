import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminLoginComponent } from '../login/admin-login/admin-login.component';
import { LatestNewsComponent } from '../latestnews/latestnews.component';


// export const dashboardRoutes: Routes = [
//   {path: 'dashboard', component: DashboardComponent},
//   {path: 'login', component: AdminLoginComponent},
//   {path: 'latestnews', component: LatestNewsComponent}
// ];

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class DashBoardRoutingModule { }
