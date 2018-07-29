import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AddGripeComponent } from './add-gripe/add-gripe.component';
import { GripeListComponent } from './gripe-list/gripe-list.component';
import { GripeListEntryComponent } from './gripe-list-entry/gripe-list-entry.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'gripesList', component: GripeListComponent },
  { path: 'addGripe', component: AddGripeComponent },//need to be logged in
  { path: 'gripe/:id', component: GripeListEntryComponent },//need to be logged in
  { path: 'userHome', component: UserHomeComponent },//need to be logged in
];
// canActivate: [sessionStorage.user] investigate more
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
