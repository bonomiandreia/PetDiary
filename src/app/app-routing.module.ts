import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { PostsModule } from './pages/posts/posts.module';

export const ROUTES: Routes = [
  { path: '', loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule)},
  { 
    path: 'posts', 
    loadChildren: () => import('./pages/posts/posts.module').then(module => module.PostsModule),
    canLoad: [AuthGuard] 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
