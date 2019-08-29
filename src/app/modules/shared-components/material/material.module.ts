import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatTabsModule, MatGridListModule],
  exports: [MatToolbarModule, MatButtonModule, MatTabsModule, MatGridListModule]
})
export class MaterialModule {}
