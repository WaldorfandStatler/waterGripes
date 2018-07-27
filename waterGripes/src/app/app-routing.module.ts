import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddGripe } from './add-gripe/add-gripe.component'
import { CreateUser } from './create-user/create-user.component';
import { GripesList } from './gripe-list/gripe-list.component';
import { GripesListEntry } from './gripe-list-entry/gripe-list-entry.component';
import { Login } from './login/login.component';
import { UserHome } from './user-home/user-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/gripesList', pathMatch: 'full' },
  { path: 'addGripe', component: AddGripeComponent },
  { path: 'createUser', component: CreateUserComponent },
  { path: 'gripesList', component: GripesListComponent },
  { path: 'gripes/:id', component: GripesListEntryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userHome', component: UserHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }