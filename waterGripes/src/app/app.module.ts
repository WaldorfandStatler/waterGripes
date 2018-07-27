import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GripeListComponent } from './gripe-list/gripe-list.component';
import { GripeListEntryComponent } from './gripe-list-entry/gripe-list-entry.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AddGripeComponent } from './add-gripe/add-gripe.component';

@NgModule({
  declarations: [
    AppComponent,
    GripeListComponent,
    GripeListEntryComponent,
    LoginComponent,
    CreateUserComponent,
    AddGripeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
