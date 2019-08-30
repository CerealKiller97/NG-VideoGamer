import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationComponent } from '../shared-components/components/notification/notification.component';
import { SharedModule } from '../shared/shared.module';
import { TeamsService } from '@serviceteams/teams.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    RouterModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    SharedModule
  ],
  entryComponents: [NotificationComponent],
  providers: [TeamsService]
})
export class HomeModule {}
