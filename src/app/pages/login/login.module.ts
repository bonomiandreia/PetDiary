
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login/login.service';
import { LoginPageRoutingModule } from './login.routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatGridListModule,
        ReactiveFormsModule,
        LoginPageRoutingModule,
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [LoginComponent],
    providers: [LoginService, AuthService],
})
export class LoginModule {}