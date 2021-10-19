import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})

export class SharedModule {}