import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';

@NgModule({
    imports: [
        NgbModule
    ],
    declarations: [
        HeaderComponent,
        FilterComponent
    ],
    exports: [
        HeaderComponent,
        FilterComponent,
        FormsModule,
        ReactiveFormsModule,
        RouterModule        
    ]
})

export class SharedModule {}