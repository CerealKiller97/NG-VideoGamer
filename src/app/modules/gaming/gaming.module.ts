import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '@shared-components/material/material.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';

import { GameProfileComponent } from './components/game-profile/game-profile.component';
import { LoadingSpinnerComponent } from '@shared-components/components';
import { SharedComponentsModule } from '..';

const routes: Routes = [
  {
    path: 'platform/:platform',
    component: GameListComponent
  },
  {
    path: 'genres/:genre',
    component: GameListComponent
  },
  {
    path: 'game/:game',
    component: GameProfileComponent
  }
];

@NgModule({
  declarations: [GameComponent, GameListComponent, GameProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MaterialModule,
    SharedComponentsModule,
    MatChipsModule,
    MatListModule
  ],
  exports: [MatCardModule, GameComponent, MaterialModule, SharedComponentsModule, MatChipsModule, MatListModule],
  entryComponents: [LoadingSpinnerComponent]
})
export class GamingModule {}
