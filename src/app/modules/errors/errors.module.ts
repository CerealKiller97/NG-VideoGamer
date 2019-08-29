import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './components/errors/errors.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ErrorsComponent
  }
];

@NgModule({
  declarations: [ErrorsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ErrorsComponent, RouterModule]
})
export class ErrorsModule {}
