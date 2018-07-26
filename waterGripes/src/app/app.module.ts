import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GripeListComponent } from './gripe-list/gripe-list.component';
import { GripeListEntryComponent } from './gripe-list-entry/gripe-list-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    GripeListComponent,
    GripeListEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
