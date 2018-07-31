import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  exports: [
    TableModule
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
