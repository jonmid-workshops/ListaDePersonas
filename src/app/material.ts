import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatSliderModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatSliderModule,
        MatDialogModule
    ],
})
export class MaterialModule { }