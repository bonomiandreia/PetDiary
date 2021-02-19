import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'posts', 
    component: PostsComponent, 
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule { }
