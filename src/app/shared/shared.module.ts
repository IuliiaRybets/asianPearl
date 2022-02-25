import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        NgbModule
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