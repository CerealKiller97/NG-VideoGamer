import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
