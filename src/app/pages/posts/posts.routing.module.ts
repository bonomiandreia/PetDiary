import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './posts.component';

export const ROUTES: Routes = [
  { path: '', component: PostPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],

exports: [RouterModule],
})
export class PostsPageRoutingModule { }