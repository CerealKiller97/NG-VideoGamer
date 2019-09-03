import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '@shared-components/material/material.module';
import { GameProfileComponent } from './components/game-profile/game-profile.component';
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
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, MaterialModule],
  exports: [MatCardModule, GameComponent, MaterialModule]
})
export class GamingModule {}
