import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddGripeComponent } from './add-gripe/add-gripe.component';
// import { CreateUserComponent } from './create-user/create-user.component';
import { GripeListComponent } from './gripe-list/gripe-list.component';
import { GripeListEntryComponent } from './gripe-list-entry/gripe-list-entry.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'addGripe', component: AddGripeComponent },
  // { path: 'createUser', component: CreateUserComponent },
  { path: 'gripesList', component: GripeListComponent },
  { path: 'gripes/:id', component: GripeListEntryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userHome', component: UserHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
