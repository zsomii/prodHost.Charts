import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialExportModule } from './material-export.module';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialExportModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgxChartsModule,
        MaterialExportModule
    ],
})
export class SharedModule { }
