
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostPageComponent } from './posts/post-page.component';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { LogoutComponent } from '../../components/logout/logout.component';

@NgModule({
    imports: [
    BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatCardModule,
        MatGridListModule
    ],
    declarations: [
        PostPageComponent,
        PostsComponent,
        LogoutComponent
    ],
    exports: [PostsComponent],
    providers: [PostsService, AuthService],
})
export class PostsModule {}