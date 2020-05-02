import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrecautionComponent } from 'src/app/precaution/precaution.component';

import { AppRoutingModule } from './core/approuting/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
