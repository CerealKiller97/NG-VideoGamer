import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './components/errors/errors.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ErrorsComponent
  }
];

@NgModule({
  declarations: [ErrorsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatGridListModule, MatButtonModule],
  exports: [ErrorsComponent, RouterModule, MatGridListModule, MatButtonModule]
})
export class ErrorsModule {}
