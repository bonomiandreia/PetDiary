
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginService } from '../../services/login/login.service';
import { LoginPageRoutingModule } from './login-page.routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatGridListModule,
        ReactiveFormsModule,
        HttpClientModule,
        LoginPageRoutingModule,
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [LoginComponent],
    providers: [LoginService, AuthService],
})
export class LoginModule {}