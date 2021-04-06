import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './pages/login-page/login/login.component';
import { PostPageComponent } from './pages/post-page/posts/post-page.component';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'posts', 
    component: PostPageComponent, 
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
exports: [RouterModule],
})
export class AppRoutingModule { }
