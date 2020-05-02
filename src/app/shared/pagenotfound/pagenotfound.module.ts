import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';


/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class PageNotFoundModule { }
