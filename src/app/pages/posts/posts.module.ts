
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostPageComponent } from './posts.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { LogoutComponent } from '../../components/logout/logout.component';
import { PostsPageRoutingModule } from './posts.routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatTableModule,
        MatCardModule,
        MatGridListModule,
        ReactiveFormsModule,
        PostsPageRoutingModule,
        MatIconModule
    ],
    declarations: [
        PostPageComponent,
        PostsComponent,
        LogoutComponent
    ],
    exports: [PostsComponent],
    providers: [AuthService],
})
export class PostsModule {}