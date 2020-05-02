import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from '../../login/login.module';
import { DashboardModule} from '../../dashboard/dashboard.module';
import { AdminLoginComponent } from 'src/app/login/admin-login/admin-login.component';
import { LatestNewsComponent } from 'src/app/latestnews/latestnews.component';
import { LatestNewsModule } from 'src/app/latestnews/latestnews.module';
import { PrecautionComponent } from 'src/app/precaution/precaution.component';
import { PrecautionModule } from 'src/app/precaution/precaution.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { PageNotFoundComponent } from 'src/app/shared/pagenotfound/page-not-found.component';
import { PageNotFoundModule } from '../../shared/pagenotfound/pagenotfound.module';
import { PortalHeaderModule } from '../../shared/portal-header/portal-header..module';

export const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'login', component: AdminLoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'latestnews', component: LatestNewsComponent},
  {path:'precaution', component: PrecautionComponent},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            LoginModule,
            PageNotFoundModule,
            LatestNewsModule,
            PrecautionModule,
            DashboardModule,
            PortalHeaderModule
  ],
  exports: [RouterModule,
            LoginModule,
            PageNotFoundModule,
            LatestNewsModule,
            PrecautionModule,
            DashboardModule,
            PortalHeaderModule
  ]
})
export class AppRoutingModule {
  constructor() {
  }
 }
