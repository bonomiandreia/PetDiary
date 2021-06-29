import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

export const ROUTES: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule)},
  { path: 'create-account', loadChildren: () => import('./pages/create-account/create-account.module').then(module => module.CreateAccountModule)},
  { 
    path: 'posts', 
    loadChildren: () => import('./pages/posts/posts.module').then(module => module.PostsModule),
    canLoad: [AuthGuard] 
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
