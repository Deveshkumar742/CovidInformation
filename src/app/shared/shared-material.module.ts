// This is a shared module that is used throughout the app.

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalFooterComponent } from './portal-footer/portal-footer.component';
import { PortalHeaderComponent } from './portal-header/portal-header.component';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [PortalFooterComponent, PortalHeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule,
    PortalHeaderComponent,
    PortalFooterComponent
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class SharedMaterialModule {
  constructor() {
  }
 }
