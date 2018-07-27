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
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    GripeListComponent,
    GripeListEntryComponent,
    LoginComponent,
    CreateUserComponent,
    AddGripeComponent,
    UserHomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
