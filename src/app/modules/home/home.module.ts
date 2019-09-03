import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationComponent } from '../shared-components/components/notification/notification.component';
import { SharedModule } from '../shared/shared.module';
import { GamesService } from '@service/games/games.service';
import { CustomIconService } from '@service/icons/custom-icons.service';
import { GameComponent } from '../gaming/components/game/game.component';
import { GamingModule } from '..';

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
    MatSnackBarModule,
    SharedModule,
    GamingModule
  ],
  exports: [
    HomeComponent,
    RouterModule,
    MatGridListModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule,
    GamingModule
  ],
  entryComponents: [NotificationComponent, GameComponent],
  providers: [GamesService, CustomIconService]
})
export class HomeModule {}
