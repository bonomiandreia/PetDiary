import { CreateAccountService } from '../../services/create-account.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CreateAccountComponent } from './create-account.component';
import { CreateAccountPageRoutingModule } from './create-account.routing.module';

@NgModule({
    imports: [
    CommonModule,
        MatTableModule,
        MatCardModule,
        MatGridListModule,
        ReactiveFormsModule,
        CreateAccountPageRoutingModule,
    ],
    declarations: [
        CreateAccountComponent,
    ],
    exports: [CreateAccountComponent],
    providers: [CreateAccountService],
})
export class CreateAccountModule {}