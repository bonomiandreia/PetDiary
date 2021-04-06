import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { LoginComponent } from './pages/login-page/login.component';

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
