import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
const routes: Routes = [];


export const appRoutes: Routes = [
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
},
{
    path: 'userprofile', component: UserProfileComponent
},
  {
      path: '', redirectTo: '/signup', pathMatch: 'full'
  }
];

